import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

let width, height, camera, controls, scene, renderer, raycaster, gui;

const pointer = new THREE.Vector2(); // mouse cursor position tracking
let intersects = []; // list to find which building is selected
let INTERSECTED = undefined; // stores which building is selected

const buildings = [];
const modals = [];
const receivedData = [];

////////// BASIC JAVASCRIPTS //////////
const fixedHelp = document.getElementById( 'fixedHelp' );
fixedHelp.addEventListener( 'click', () => {

  if ( fixedHelp.classList.contains( 'active' ) ) {

    fixedHelp.classList.remove( 'active' );
    fixedHelp.removeAttribute( 'style' );
    return;

  }

  fixedHelp.classList.add( 'active' );
  fixedHelp.style.height = fixedHelp.querySelector( 'ul' ).clientHeight + 40 + 'px';

} );
////////// BASIC JAVASCRIPTS END //////////


// THREE.js from here:

init();
animate();

function init() {

  // variables

  width = window.innerWidth;
  height = window.innerHeight - 1; // prevent generating scroll bar

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  raycaster = new THREE.Raycaster(); // for mouse(pointer) tracking

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  // where to append
  document.querySelector( 'main' ).appendChild( renderer.domElement );

  camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );
  camera.position.set( 400, 200, 0 );

  // controls

  controls = new MapControls( camera, renderer.domElement );

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 700;

  controls.maxPolarAngle = Math.PI / 2;

  // GLTF Loader

  const gltfLoader = new GLTFLoader();
  createModel( gltfLoader, './models/SaeBit.glb', new THREE.Vector3( 112, 0, -460 ), 'SaeBit', -106, 2 );
  createModel( gltfLoader, './models/HwaDo.glb', new THREE.Vector3(-30, 0, -210), 'HwaDo', -118, 2);

  // world floor

  const planeSize = 2000;
  const planeTexture = new THREE.TextureLoader().load( './images/KakaoMap_KWU.png' );
  const worldFloor = new THREE.Mesh(
    new THREE.PlaneGeometry( planeSize, planeSize, 8, 8 ),
    new THREE.MeshBasicMaterial( { side: THREE.FrontSide, map: planeTexture } )
  );
  worldFloor.rotateX( Math.PI / (-2) );
  worldFloor.rotateZ( Math.PI / 2 );
  worldFloor.name = 'worldFloor';
  scene.add(worldFloor);

  // lights

  const dirLight1 = new THREE.DirectionalLight( 0xffffff );
  dirLight1.position.set( 10, 12, 9 );
  dirLight1.name = 'dirLight1';
  scene.add( dirLight1 );

  const dirLight2 = new THREE.DirectionalLight( 0x002266 );
  dirLight2.position.set( -9, -12, -10 );
  dirLight2.name = 'dirLight2';
  scene.add( dirLight2 );

  const ambientLight = new THREE.AmbientLight( 0x222222 );
  ambientLight.name = 'ambientLight';
  scene.add( ambientLight );

  // Create GUI Pannel

  gui = new GUI( { container: document.getElementById( 'guiContainer' ), title: 'Information' } );
  let obj = {
    myBoolean: false,
    myString: 'Test String',
    myNumber: 512,
    myFunction: function() { alert( 'hi' ) }, // onclick callback
    onClickSaeBit: function() { gui.controllers[ 1 ].setValue( '새빛관 테스트 버튼 clicked' ); gui.controllers[ 2 ].setValue( 9 ); }, // onclick saebit here (test button)
    onClickHwaDo: function() { gui.controllers[ 1 ].setValue( '화도관 테스트 버튼 clicked' ); gui.controllers[ 2 ].setValue( 6 ); }, // onclick hwado here (test button)
  }
  
  gui.add( obj, 'myBoolean' ); 	// checkbox
  gui.add( obj, 'myString' ); 	// text field
  gui.add( obj, 'myNumber' ); 	// number field
  gui.add( obj, 'myFunction' ).name( 'alert hi' ); 	// button
  gui.add( obj, 'onClickSaeBit' ).name( '새빛관 onClick test' );
  gui.add( obj, 'onClickHwaDo' ).name( '화도관 onClick test' );

  window.addEventListener( 'resize', onWindowResize );
  window.addEventListener( 'pointermove', onPointerMove );
  window.addEventListener( 'dblclick', ( event ) => { // dev
    // 더블 클릭시 카메라의 위치에서 카메라 방향으로 
    console.log( event );
    scene.add( new THREE.ArrowHelper( camera.getWorldDirection( new THREE.Vector3 ), camera.getWorldPosition( new THREE.Vector3 ), 100, 0xff0000 ) );
  } );

}

// window events

function onWindowResize() {
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );
  
}

function onPointerMove( event ) {

  pointer.set( ( event.clientX / width ) * 2 - 1, - ( event.clientY / height ) * 2 + 1 );
  getIntersects();

}

function onClick( event ) {

}

// three.js required

function animate() {

  window.requestAnimationFrame( animate );

  // Let the groups generated from `createModal()` to face camera all the time
  modals.forEach( ( modal ) => {

    modal.quaternion.copy( camera.quaternion );

  });
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();

}

function render() {

  renderer.render( scene, camera );

}

// customed functions

/**
 * 건물의 모델링을 불러와 `scene`에 추가합니다.
 * 
 * `loader` 를 사용해 `modelPath` 에 있는 모델을 불러옵니다.   
 * 모델의 위치, 회전시킬 각도, 크기 조정을 위한 스케일을 설정하여 `scene` 및 `buildings` 리스트에 추가하고, `createModal()` 에 `position` 을 전달합니다.
 * @param { GLTFLoader } loader `GLTFLoader` used in this file.
 * @param { string } modelPath string path url of target `*.glb` file.
 * @param { THREE.Vector3 } position a position where this model will be placed.
 * @param { string } name name of this model.
 * @param { number } angle rotation angle applied to `rotateY`.
 * @param { number } scale recommended value is 2.
 */
function createModel ( loader, modelPath, position, name, angle, scale ) {

  loader.load( modelPath, async ( gltf ) => {

    const model = await gltf.scene;
    model.name = name;
    model.position.copy( position );
    model.rotateY( Math.PI / 180 * angle );
    model.scale.setScalar( scale );

    // add events to this model via userData
    model.userData = {
      isActive: false,

      onPointerOver: function() {
        for ( let child of model.children ) {

          child.currentHex = child.material.emissive.getHex();
          child.material.emissive.setHex( 0xff0000 );
    
        }
      },

      onPointerOut: function() {
        for ( let child of model.children ) {

          child.material.emissive.setHex( 0 );

        }
      },

      onClick: function() {

        model.userData.isActive = !model.userData.isActive;
        console.log( model.name + ' clicked!' );

      }
    }
    
    createModal( model.position, name );
    buildings.push( model );
    scene.add( model );

  }, ( progress ) => {

    // console.log( progress.loaded / progress.total * 100 + "% loaded!" );

  }, ( error ) => {

    console.error( error );

  } );

}

/**
 * 건물 이름 표시를 위한 3D 모달 생성 함수입니다.   
 * `position` 에 해당하는 위치에서 `THREE.Line` 과 `THREE.Mesh (text)` 을 갖는 `THREE.Group` 을 생성합니다.
 * @param { THREE.Vector3 } position position of the target model
 * @param { string } name name of the target building
 * @notice 현재 사용하는 폰트는 한글이 지원되지 않습니다. `name` 의 값이 한글일 경우, 물음표로 표시됩니다.
 */
function createModal( position, name ) {
  // Drawing Lines:
  const points = [];
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 50, 50, 50 ) );

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } )
  );
  line.position.set( 0, 0, 0 );
  line.material.depthTest = false; // for renderOrder

  const loader = new FontLoader();
  loader.load( './fonts/helvetiker_bold.typeface.json', function ( font ) {

    const material = new THREE.MeshBasicMaterial( {
      color: 0x000000,
      transparent: false,
      side: THREE.FrontSide,
    } );

    const message = name;
    const shapes = font.generateShapes( message, 10 );
    const geometry = new THREE.ShapeGeometry( shapes );

    // make shape ( N.B. edge view not visible )
    const text = new THREE.Mesh( geometry, material );
    text.position.set( 50, 50, 50 );
    text.material.depthTest = false; // for renderOrder
    group.add( text );

  } ); //end load function

  // Create Group:
  const group = new THREE.Group();
  group.add( line );
  // group.add( plane );
  group.position.copy( position );
  modals.push( group );
  group.renderOrder = 1; // renderOrder (z-index)
  group.name = name + ' Modal';
  scene.add( group );

}

/**
 * `pointer` 에서 `camera` 가 바라보는 방향으로 `raycaster` 를 생성해 교차하는 아이템을 가져옵니다.   
 * 
 * `buildings` 목록에서 `raycaster` 와 교차하는 아이템을 확인하여 가장 앞에 있는 것을 `INTERSECTED`로 설정한 후 `onPointerOver()` 를 수행합니다.   
 * 교차하는 아이템이 바뀌거나 사라졌을 때는 기존 아이템의 `onPointerOut`를 수행합니다.
 */
function getIntersects() {

  raycaster.setFromCamera( pointer, camera );
  intersects = raycaster.intersectObjects( buildings, true );
  if ( intersects.length > 0 ) { 
    
    if ( INTERSECTED ) INTERSECTED.userData.onPointerOut();
    INTERSECTED = intersects[ 0 ].object.parent;
    INTERSECTED.userData.onPointerOver();
  
  } else { 
    
    if ( INTERSECTED ) INTERSECTED.userData.onPointerOut();
    INTERSECTED = undefined;
  
  }

}