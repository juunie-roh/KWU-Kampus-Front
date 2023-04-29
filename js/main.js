import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let camera, controls, scene, renderer;
const buildings = [];
const modals = [];

init();
//render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight - 80 );
  document.querySelector('main').appendChild( renderer.domElement );

  camera = new THREE.PerspectiveCamera (60, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 400, 200, 0 );

  // controls

  controls = new MapControls( camera, renderer.domElement );

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

  // loader
  const loader = new GLTFLoader();
  loader.load('./models/SaeBit.glb', ( gltf ) => {
    const model = gltf.scene;
    model.position.set( 112, 0, -460 );
    model.rotateY( - Math.PI / 180 * 106 );
    model.scale.setScalar( 2 );
    
    createModal( model.position );
    scene.add( model );
  }, undefined, ( error ) => {
    console.error( error );
  });

  // world floor
  const planeSize = 2000;
  const planeTexture = new THREE.TextureLoader().load( './images/KakaoMap_KWU.png' );
  const worldFloor = new THREE.Mesh(
    new THREE.PlaneGeometry( planeSize, planeSize, 8, 8 ),
    new THREE.MeshBasicMaterial( { side: THREE.FrontSide, map: planeTexture } )
  );
  worldFloor.rotateX( - Math.PI / 2 );
  worldFloor.rotateZ( Math.PI / 2 );
  scene.add(worldFloor);

  // lights

  const dirLight1 = new THREE.DirectionalLight( 0xffffff );
  dirLight1.position.set( 10, 12, 9 );
  scene.add( dirLight1 );

  const dirLight2 = new THREE.DirectionalLight( 0x002266 );
  dirLight2.position.set( -9, -12, -10 );
  scene.add( dirLight2 );

  const ambientLight = new THREE.AmbientLight( 0x222222 );
  scene.add( ambientLight );

  //

  window.addEventListener( 'resize', onWindowResize );

  // Create GUI Control Pannel
  const gui = new GUI( { container: document.getElementById( 'guiContainer' ), title: 'Information' } );
  gui.add(document, 'title');
  let obj = {
    myBoolean: false,
    myString: 'Test String',
    myNumber: 512,
    myFunction: function() { alert( 'hi' ) }
  }
  
  gui.add( obj, 'myBoolean' ); 	// checkbox
  gui.add( obj, 'myString' ); 	// text field
  gui.add( obj, 'myNumber' ); 	// number field
  gui.add( obj, 'myFunction' ); 	// button

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );
  modals.forEach( ( modal ) => {
    modal.quaternion.copy( camera.quaternion );
  });
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();

}

function render() {

  renderer.render( scene, camera );

}

const fixedHelp = document.getElementById( 'fixedHelp' );
fixedHelp.addEventListener('click', () => {

  if ( fixedHelp.classList.contains( 'active' ) ) {

    fixedHelp.classList.remove( 'active' );
    fixedHelp.removeAttribute( 'style' );
    return;

  }

  fixedHelp.classList.add( 'active' );
  fixedHelp.style.height = fixedHelp.querySelector( 'ul' ).clientHeight + 40 + 'px';

});

function createModal( position ) {
  // Drawing Lines:
  const points = [];
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 50, 50, 50 ) );
  // points.push( new THREE.Vector3( 50, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
  const line = new THREE.Line( geometry, material );
  line.position.set( 0, 0, 0 );
  line.material.depthTest = false; // renderOrder

  // testing group:
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 50, 50, 8, 8, ),
    new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.FrontSide, transparent: true, opacity: 0.5 } )
  );
  plane.position.set( 50, 50, 50 );
  plane.material.depthTest = false; // renderOrder

  const group = new THREE.Group();
  group.add( line );
  group.add( plane );
  group.position.copy( position );
  modals.push( group );
  group.renderOrder = 1;
  scene.add( group );

}