import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import * as URL from './url.js';

// basic javascripts

const datas = [
  {
    building_code: '04',
    building: '복지관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BokJi.glb',
    position_x: 120,
    position_y: 0,
    position_z: 10,
    angle: 63,
    scale: 1,
    others: '',
  },
  {
    building_code: '05',
    building: '비마관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BiMa.glb',
    position_x: 79,
    position_y: 0,
    position_z: -148,
    angle: 23,
    scale: 1,
    others: '',
  },
  {
    building_code: '08',
    building: '새빛관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/SaeBit.glb',
    position_x: 55,
    position_y: 0,
    position_z: -229,
    angle: 74.5,
    scale: 1,
    others: '',
  },
  {
    building_code: '09',
    building: '아이스링크',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/IceRink.glb',
    position_x: 0,
    position_y: 0,
    position_z: 97,
    angle: 123,
    scale: 1,
    others: '',
  },
  {
    building_code: '10',
    building: '연구문화관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/DongHae.glb',
    position_x: 50,
    position_y: 0,
    position_z: 65,
    angle: 159,
    scale: 1,
    others: '',
  },
  {
    building_code: '12',
    building: '옥의관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/OkUi.glb',
    position_x: 162,
    position_y: 0,
    position_z: -72,
    angle: 212,
    scale: 1,
    others: '',
  },
  {
    building_code: '17',
    building: '화도관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HwaDo.glb',
    position_x: -16,
    position_y: 0,
    position_z: -106,
    angle: -118,
    scale: 1,
    others: '',
  },
  {
    building_code: '03',
    building: '다산재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/DaSan.glb',
    position_x: 131,
    position_y: 0,
    position_z: -156,
    angle: 42,
    scale: 1,
    others: '',
  },
  {
    building_code: '11',
    building: '연촌재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/YeonChon.glb',
    position_x: -175,
    position_y: 0,
    position_z: 146,
    angle: 144,
    scale: 1,
    others: '',
  },
  {
    building_code: '14',
    building: '참빛관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/ChamBit.glb',
    position_x: 128,
    position_y: 0,
    position_z: -235,
    angle: -70,
    scale: 1,
    others: '',
  },
  {
    building_code: '15',
    building: '한울관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HanUl.glb',
    position_x: -37,
    position_y: 0,
    position_z: 104,
    angle: -76,
    scale: 1,
    others: '',
  },
  {
    building_code: '16',
    building: '한천재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HanCheon.glb',
    position_x: 8,
    position_y: 0,
    position_z: 65,
    angle: -20,
    scale: 1,
    others: '',
  },
  {
    building_code: '13',
    building: '인터내셔널 하우스',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/InternationalHouse.glb',
    position_x: -204,
    position_y: 0,
    position_z: 165,
    angle: 100,
    scale: 1,
    others: '',
  },
  {
    building_code: '02',
    building: '누리관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/NuRi.glb',
    position_x: -2,
    position_y: 0,
    position_z: 290,
    angle: -27,
    scale: 1,
    others: '',
  },
  {
    building_code: '01',
    building: '80주년 기념관 & 광운 스퀘어',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/KWSquare.glb',
    position_x: 42,
    position_y: 0,
    position_z: -70,
    angle: -119,
    scale: 1,
    others: '',
  },
  {
    building_code: '06',
    building: '빛솔재 A동',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BitSolA.glb',
    position_x: -118,
    position_y: 0,
    position_z: 180,
    angle: 15,
    scale: 1,
    others: '',
  },
  {
    building_code: '07',
    building: '빛솔재 B동',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BitSolB.glb',
    position_x: -107,
    position_y: 0,
    position_z: 129,
    angle: 15,
    scale: 1,
    others: '',
  }
];
let receivedData;

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

const subCategories = document.querySelectorAll( 'ul.sub-categories li a' );
const main = document.querySelector( 'main' );

///////////////////////////////
///// THREE.js from here: /////
///////////////////////////////

let width, height, camera, controls, scene, renderer, raycaster;

const pointer = new THREE.Vector2(); // mouse cursor position tracking
let intersects = []; // list to find which building is selected
let INTERSECTED = undefined; // stores which building is selected

const buildings = [];
const fonts = [];
// const arrows = [];

init();
animate();

function init() {

  // variables

  width = window.innerWidth;
  height = window.innerHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  // scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  raycaster = new THREE.Raycaster(); // for mouse(pointer) tracking

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  main.appendChild( renderer.domElement ); // where to append

  camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );// 1000 );
  camera.position.set( 300, 300, 0 ); // ( 400, 200, 0 );

  // controls

  controls = new MapControls( camera, renderer.domElement );

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

  // GLTF Loader, load models

  const gltfLoader = new GLTFLoader();
  // fetch( URL.buildings, {
  //   method: 'GET',
  // } )
  // .then( res => res.json() )
  // .then ( res => {

  //   receivedData = res;
  //   receivedData.forEach( ( data ) => {
  //     createModel( gltfLoader, data );
  //   } );

  // } );

  datas.forEach( ( data ) => {
    createModel( gltfLoader, data );
  } );

  // world floor

  const planeSize = 1000; // 2000;
  const planeTexture = new THREE.TextureLoader().load( './images/KakaoMap_KWU.png' );
  const worldFloor = new THREE.Mesh(
    new THREE.PlaneGeometry( planeSize, planeSize, 8, 8 ),
    new THREE.MeshBasicMaterial( { side: THREE.FrontSide, map: planeTexture } )
  );
  worldFloor.rotateX( Math.PI / ( -2 ) );
  worldFloor.rotateZ( Math.PI / 2 );
  worldFloor.name = 'worldFloor';
  scene.add( worldFloor );

  // lights

  const dirLight1 = new THREE.DirectionalLight( 0xffffff );
  dirLight1.position.set( 10, 12, 9 );
  dirLight1.name = 'dirLight1';
  scene.add( dirLight1 );

  const dirLight2 = new THREE.DirectionalLight( 0x222222 );
  dirLight2.position.set( -9, -12, -10 );
  dirLight2.name = 'dirLight2';
  scene.add( dirLight2 );

  const dirLight3 = new THREE.DirectionalLight( 0x666666 );
  dirLight3.position.set( 13, 12, -10 );
  dirLight3.name = 'dirLight3';
  scene.add( dirLight3 );

  const ambientLight = new THREE.AmbientLight( 0x666666 );
  ambientLight.name = 'ambientLight';
  scene.add( ambientLight );

  // Create Info Pannel

  // // Grid Helper
  // const gridHelper = new THREE.GridHelper( 1000, 100 );
  // scene.add( gridHelper );

  window.addEventListener( 'resize', onWindowResize );
  main.addEventListener( 'pointermove', onPointerMove );
  main.addEventListener( 'click', onClick );
  // window.addEventListener( 'dblclick', ( event ) => { // dev, 더블 클릭시 카메라의 위치에서 카메라 방향으로 
  //   let worldDirection = new THREE.Vector3;
  //   let worldPosition = new THREE.Vector3;
  //   const arrow = new THREE.ArrowHelper( camera.getWorldDirection( worldDirection ), camera.getWorldPosition( worldPosition ), 15, 0xff0000 );
  //   scene.add( arrow );
  //   console.log( worldDirection );
  //   console.log( worldPosition );
  // } );

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

  onPointerMove( event ); // get pointer position
  if ( INTERSECTED ) {

    INTERSECTED.userData.onClick();

  }

}

// three.js required

function animate() {

  window.requestAnimationFrame( animate );

  // Let the groups generated from `createFont()` to face the camera all the time
  fonts.forEach( ( font ) => {

    font.quaternion.copy( camera.quaternion );

  } );
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();

}

function render() {

  renderer.render( scene, camera );

}

// custom functions

/**
 * 건물의 모델링을 불러와 `scene`에 추가하고, `buildings` 리스트에 저장 및 `subCategories`의 이벤트 리스너를 설정합니다.
 * 
 * `loader` 를 사용해 `building.modelPath` 에 있는 모델을 불러옵니다.   
 * 모델의 위치, 회전시킬 각도, 크기 조정을 위한 스케일을 설정하여 `scene` 및 `buildings` 리스트에 추가하고, `createFont()` 에 `position` 을 전달합니다.
 * @param { GLTFLoader } loader `GLTFLoader` used in this file.
 * @param { object } data Item stored in `receivedData` list, an object containing informations of each buildings.
 */
function createModel ( loader, data ) {

  // more error handling needed
  if ( !data.model_path ) { console.error( 'model_path not found.' ); return; }
  loader.load( data.model_path, async ( gltf ) => {

    const model = await gltf.scene;
    if ( !model ) {
      // error handling
    }
    model.name = data.building;
    model.position.set( data.position_x, data.position_y, data.position_z );
    model.rotateY( Math.PI / 180 * data.angle );
    model.scale.setScalar( data.scale );

    // const facilities = await fetch( URL.importance + data.building_code )
    //                          .then( res => res.json() )
    //                          .then( datas => {

    //                            let result = [];
    //                            datas.forEach( ( data ) => { result.push( data ); } );
    //                            return result;

    //                          } );

    model.userData = {

      id: data.building_code,
      building_phone_num: data.building_phone_num,
      management_team: data.management_team,
      management_team_phone_num: data.management_team_phone_num,
      // importance_rooms: facilities,
      others: data.others,

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

        controls.target.copy( model.position );
        controls.update();
        console.log( model.name + ' clicked' );
        console.log( model.userData.importance_rooms );
        sessionStorage.setItem( 'building_code', model.userData.id );

      }

    }
    
    // removing spaces from the model.name as this font does not support spaces.
    createFont( model.position, model.name.replace( /\s/g, '' ) );
    buildings.push( model );
    scene.add( model );

    // subCategories Event Listener
    subCategories.forEach( ( subCategory ) => {

      const subId = subCategory.getAttribute( 'data-id' );
      if ( subId === model.userData.id ) {

        const target = model;

        // hover event
        subCategory.addEventListener( 'mouseover', () => {
          target.userData.onPointerOver();
        } );
        subCategory.addEventListener( 'mouseout', () => {
          target.userData.onPointerOut();
        } );

        // click event
        subCategory.addEventListener( 'click', ( e ) => {
      
          e.preventDefault();
          target.userData.onClick();
      
        } );

        }
    } );

  }, ( progress ) => {

    // console.log( progress.loaded / progress.total * 100 + "% loaded!" );

  }, ( error ) => {

    console.error( error );

  } );

}

/**
 * 건물 이름 표시를 위한 3D 폰트 생성 함수입니다.   
 * `position` 에 해당하는 위치에서 `THREE.Line` 과 `THREE.Mesh (text)` 을 갖는 `THREE.Group` 을 생성합니다.
 * @param { THREE.Vector3 } position position of the target model
 * @param { string } name name of the target building
 */
async function createFont( position, name ) {
  // Drawing Lines:
  const points = [];
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 25, 25, 25 ) ); // ( 50, 50, 50 ) );

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } )
  );
  line.position.set( 0, 0, 0 );
  // line.material.depthTest = false; // for renderOrder

  // font loading function
  const loader = new FontLoader();
  await loader.load( './fonts/NanumSquareRound.json', function ( font ) {

    const material = new THREE.MeshBasicMaterial( {
      color: 0x000000,
      transparent: false,
      side: THREE.FrontSide,
    } );

    const message = name;
    const shapes = font.generateShapes( message, 5 ); // 10 );
    const geometry = new THREE.ShapeGeometry( shapes );

    // make shape ( N.B. edge view not visible )
    const text = new THREE.Mesh( geometry, material );
    text.position.set( 25, 25, 25 );// ( 50, 50, 50 );
    text.material.depthTest = false; // for renderOrder
    group.add( text );

  } ); //end load function

  // Create Group:
  const group = new THREE.Group();
  group.add( line );
  // group.add( plane );
  group.position.copy( position );
  fonts.push( group );
  group.renderOrder = 1; // renderOrder (z-index)
  group.name = name + ' Font';
  scene.add( group );

}

/**
 * `pointer` 에서 `camera` 가 바라보는 방향으로 `raycaster` 를 생성해 교차하는 아이템을 가져옵니다.   
 * 
 * `buildings[]` 에서 `raycaster` 와 교차하는 아이템을 확인하여 가장 앞에 있는 것을 `INTERSECTED`로 설정한 후 `onPointerOver()` 를 수행합니다.   
 * 교차하는 아이템이 바뀌거나 사라졌을 때는 기존 아이템의 `onPointerOut()`를 수행합니다.
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