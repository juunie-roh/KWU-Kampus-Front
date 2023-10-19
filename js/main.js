import * as THREE from 'three';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import * as URL from './url.js';

const buildingDatas = [
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
    position_x: -119,
    position_y: 0,
    position_z: 171,
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
const noticeExamples = [
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 1",
    "date": "2023-06-13"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 2",
    "date": "2023-05-10"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 3",
    "date": "2023-03-29"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 4",
    "date": "2023-03-22"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 5",
    "date": "2023-03-17"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 6",
    "date": "2023-03-03"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 7",
    "date": "2023-02-27"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 8",
    "date": "2022-10-12"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 9",
    "date": "2022-09-21"
  },
  {
    "dept": "Dept Example 1",
    "site": "#",
    "notice": "Dept 1 Notice Title 10",
    "date": "2022-04-11"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 1",
    "date": "2023-08-21"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 2",
    "date": "2023-03-24"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 3",
    "date": "2022-12-09"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 4",
    "date": "2022-11-16"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 5",
    "date": "2022-10-12"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 6",
    "date": "2023-08-21"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 7",
    "date": "2023-08-16"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 8",
    "date": "2023-06-28"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 9",
    "date": "2023-04-07"
  },
  {
    "dept": "Dept Example 2",
    "site": "#",
    "notice": "Dept 2 Notice Title 10",
    "date": "2023-03-24"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 1",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 2",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 3",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 4",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 5",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 6",
    "date": "2023-09-06"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 7",
    "date": "2023-09-05"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 8",
    "date": "2023-09-05"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 9",
    "date": "2023-09-05"
  },
  {
    "dept": "Dept Example 3",
    "site": "#",
    "notice": "Dept 3 Notice Title 10",
    "date": "2023-09-01"
  },
];
const facilitiesExamples = [
  {
    "building": "새빛관",
    "floor": "1",
    "room_no": "105",
    "building_code": "08",
    "room_code": "0-0105-0",
    "facilities": "코딩컨설팅룸",
    "category": null,
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "4",
    "room_no": "404",
    "building_code": "08",
    "room_code": "0-0404-0",
    "facilities": "소융대\r\n교학팀/학사",
    "category": "행정기관",
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "4",
    "room_no": "405",
    "building_code": "08",
    "room_code": "0-0405-0",
    "facilities": "소프트\r\n학생회실",
    "category": null,
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "4",
    "room_no": "406",
    "building_code": "08",
    "room_code": "0-0406-0",
    "facilities": "컴정공\r\n학생회실",
    "category": null,
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "5",
    "room_no": "508",
    "building_code": "08",
    "room_code": "0-0508-0",
    "facilities": "스마트융합\r\n대학원교학팀",
    "category": "행정기관",
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "4",
    "room_no": "407",
    "building_code": "08",
    "room_code": "0-0407-0",
    "facilities": "정보융합\r\n학생회실",
    "category": null,
    "importance": true
  },
  {
    "building": "새빛관",
    "floor": "4",
    "room_no": "408",
    "building_code": "08",
    "room_code": "0-0408-0",
    "facilities": "소융대\r\n학생회실",
    "category": null,
    "importance": true
  }
];
const detailNoticeExamples = [
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 1",
    "date": "2023-10-19"
  },
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 2",
    "date": "2023-10-10"
  },
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 3",
    "date": "2023-10-09"
  },
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 4",
    "date": "2023-10-05"
  },
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 5",
    "date": "2023-10-02"
  },
  {
    "building_code": "01",
    "site": "#",
    "notice": "01 Example 6",
    "date": "2023-10-01"
  },
  {
    "building_code": "02",
    "site": "#",
    "notice": "02 Example 1",
    "date": "2023-10-19"
  },
  {
    "building_code": "03",
    "site": "#",
    "notice": "03 Example 1",
    "date": "2023-10-19"
  },
  {
    "building_code": "04",
    "site": "#",
    "notice": "04 Example 1",
    "date": "2023-10-19"
  },
  {
    "building_code": "05",
    "site": "#",
    "notice": "05 Example 1",
    "date": "2023-10-19"
  },
  {
    "building_code": "06",
    "site": "#",
    "notice": "06 Example 1",
    "date": "2023-10-19"
  }
];
let detailNoticeDatas;
let receivedData;

const fixedHelp = document.getElementById('fixedHelp');
const mapMenuBtn = document.getElementById('mapMenuBtn');
const mapMenu = document.getElementById('mapMenu');
const detailsOpenBtn = document.getElementById('detailsOpenBtn');
const detailsCloseBtn = document.getElementById('detailsCloseBtn');
const details = document.getElementById('details');
const categories = document.getElementsByClassName('category');
const subCategories = document.querySelectorAll('ul.sub-categories li a');
const container = document.getElementById('mapContainer');
const detail_link = document.getElementById('detail_link');

///////////////////////////////
///// THREE.js from here: /////
///////////////////////////////

let width, height, camera, controls, scene, renderer, raycaster, headerHeight;
const pointer = new THREE.Vector2(); // mouse cursor position tracking
let intersects = []; // list to find which building is selected
let INTERSECTED = undefined; // stores which building is selected

const buildings = []; // Loaded Buildings List
const fonts = []; // Loaded Fonts List
// const arrows = [];

let plane;
let exrCubeRenderTarget;
let exrBackground;
const params = {
  envMap: 'EXR',
  roughness: 0.1,
  metalness: 0.6,
  exposure: 0.9,
  debug: false,
};
let activeFacLi;

init();
noticeInit();
detailNoticeInit();
animate();

async function init() {

  // variables
  updateWindowSize();

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  // scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  raycaster = new THREE.Raycaster(); // for mouse(pointer) tracking

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  container.appendChild( renderer.domElement ); // where to append

  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;

  camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );// 1000 );
  camera.position.set( 300, 200, 0 ); // ( 400, 200, 0 );

  initControls();
  initWorldFloor();
  initLights();

  // EXR Loader
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  THREE.DefaultLoadingManager.onLoad = () => { pmremGenerator.dispose(); }
  new EXRLoader().load('./textures/sky_1k.exr', texture => {

    texture.mapping = THREE.EquirectangularReflectionMapping;
    exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
    exrBackground = texture;

  });
  pmremGenerator.compileEquirectangularShader();

  // // Grid Helper
  // const gridHelper = new THREE.GridHelper( 1000, 100 );
  // scene.add( gridHelper );

  // Event Listeners

  window.addEventListener( 'resize', onWindowResize );
  container.addEventListener( 'pointermove', onPointerMove );
  container.addEventListener( 'click', onClick );
  // window.addEventListener( 'dblclick', ( event ) => { // dev, 더블 클릭시 카메라의 위치에서 카메라 방향으로 
  //   let worldDirection = new THREE.Vector3;
  //   let worldPosition = new THREE.Vector3;
  //   const arrow = new THREE.ArrowHelper( camera.getWorldDirection( worldDirection ), camera.getWorldPosition( worldPosition ), 15, 0xff0000 );
  //   scene.add( arrow );
  //   console.log( worldDirection );
  //   console.log( worldPosition );
  // } );

  fixedHelp.addEventListener('click', () => {
  
    if (fixedHelp.classList.contains('active')) {
      fixedHelp.classList.remove('active');
      fixedHelp.removeAttribute('style');
      return;
    }
    fixedHelp.classList.add('active');
    fixedHelp.style.height = fixedHelp.querySelector('ul').clientHeight + 40 + 'px';
    
  });
  
  mapMenuBtn.addEventListener('click', () => {
    
    mapMenuBtn.classList.toggle('active');
    mapMenu.classList.toggle('active');
    
  });

  for (let category of categories) {

    const text = category.querySelector( '.text' );
    text.addEventListener('click', () => {

      const textHeight = text.clientHeight;
      const subCategoriesHeight = category.querySelector( '.sub-categories' ).clientHeight;

      if (category.classList.contains('on')) {
        category.classList.remove( 'on' );
        category.style.height = textHeight + 'px';
        return;
      }

      category.classList.add( 'on' );
      category.style.height = category.clientHeight + subCategoriesHeight + 'px';
      return;

    });

  };

  detailsOpenBtn.addEventListener('click', () => { details.classList.add('active'); });
  detailsCloseBtn.addEventListener('click', () => { details.classList.remove('active'); });
  detail_link.addEventListener('click', (e) => {
    e.preventDefault();
    const bc = sessionStorage.getItem('building_code');
    if (!bc) {
      alert('선택된 건물이 없습니다.'); return;
    } else if (bc === '09') {
      // if the selected building is IceRink(code 09)
      location.href = URL.icerink;
    } else if (bc === '06' || bc === '07') {
      // if the selected building is BitSol A or B (code 07 or 08)
      location.href = URL.dormitory;
    } else if (bc === '13') {
      // if the selected building is International House (code 13)
      location.href = URL.international;
    } else {
      location.href = './pages/detail.html';
    }
  })

  // GLTF Loader, load models

  const gltfLoader = new GLTFLoader();
  // const datas = await fetch(URL.buildings, { method: 'GET' })
  //                     .then(res => res.json())
  //                     .then(json => { return json; });

  buildingDatas.forEach(data => { createModel(gltfLoader, data); });

}

async function noticeInit() {

  // const noticeDatas = await fetch(URL.notice, { method: 'GET' })
  //                           .then(res => res.json()) // if (res.status === 200) { return res.json() } else { error handling }
  //                           .then(json => { return json; });
  const noticeDatas = noticeExamples;
  // console.log(noticeDatas);
  if (!noticeDatas) return;

  // Extract dept names and remove duplicates from raw data
  const depts = [];
  noticeDatas.forEach(data => { depts.push(data.dept); });
  const uniqDepts = [...new Set(depts)];
  // console.log(uniqDepts);

  // create html elements for uniqDepts
  uniqDepts.forEach((dept, index) => {

    const filtered = noticeDatas.filter(data => data.dept === dept);
    createNoticeList(filtered, index);

  });

  // click events
  const noticeLis = document.querySelectorAll('li.notice-list');
  let activateIndex = 0;
  noticeLis.forEach((noticeLi, index) => {

    noticeLi.addEventListener('click', (e) => {

      e.preventDefault();
      let currentActiveNoticeLi = document.querySelector('li.notice-list.active');
      currentActiveNoticeLi.classList.remove('active');
      e.target.parentElement.classList.add('active');
      activateNotice(activateIndex, index);
      activateIndex = index;

    });

  })

}

async function detailNoticeInit() {
  // const detailNoticeDatas = await fetch(URL.detailNotice, { method: 'GET' })
  //                           .then(res => res.json()) // if (res.status === 200) { return res.json() } else { error handling }
  //                           .then(json => { return json; });

  detailNoticeDatas = detailNoticeExamples;
  
}

// window events

function onWindowResize() {
  
  updateWindowSize();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );
  
}

function onPointerMove( event ) {

  event.preventDefault();
  let gapX = event.clientX - event.offsetX;
  let gapY = event.clientY - event.offsetY;
  pointer.set(((event.clientX - gapX) / width) * 2 - 1, - ((event.clientY - gapY) / height) * 2 + 1);
  getIntersects();

}

function onClick( event ) {

  onPointerMove(event); // get pointer position
  INTERSECTED && INTERSECTED.userData.onClick();

}

// three.js required functions

function animate() {

  window.requestAnimationFrame( animate );

  // Let the groups generated from `createFont()` face the camera all the time
  fonts.forEach(font => { font.quaternion.copy(camera.quaternion) });
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();

}

function render() {

  let background = scene.background;
  let newEnvMap = exrCubeRenderTarget ? exrCubeRenderTarget.texture : null;

  background = exrBackground;
  buildings.forEach(building => {
    building.traverse(n => {
      
      if (n.isMesh) {
        n.material.envMap = newEnvMap;
        n.material.needsUpdate = true;
        if (n.name === 'Window') {
          n.material.roughness = params.roughness;
          n.material.metalness = params.metalness;
          n.material.reflectivity = 1;
        }
      }

    })
  })

  scene.background = background;
  renderer.toneMappingExposure = params.exposure;

  renderer.render(scene, camera);

}

// custom functions

/**
 * 3D 맵이 차지할 영역의 너비 및 높이를 업데이트 합니다.
 * header 영역이 차지하는 부분과 margin 으로 설정한 10px 씩을 제외한 전체화면입니다.
 */
function updateWindowSize() {

  headerHeight = Number(getComputedStyle(document.documentElement).getPropertyValue('--header-height').slice(0, 2));
  width = window.innerWidth - 20;
  height = window.innerHeight - 20 - headerHeight;

}

/**
 * 3D 맵의 컨트롤을 설정합니다. 
 * three.js example: misc_controls_map 의 기본 설정입니다.
 */
function initControls() {

  controls = new MapControls( camera, renderer.domElement );

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

}

/**
 * 3D 환경의 바닥을 설정합니다.
 * 평면을 생상하고, 지정된 경로의 파일을 불러와 texture로 설정해 입힌 후, 각도를 맞추고 `scene`에 추가합니다.
 */
function initWorldFloor() {

  const planeSize = 1000; // 2000;
  const planeTexture = new THREE.TextureLoader().load('./images/KakaoMap_KWU.png');
  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeSize, planeSize, 8, 8),
    new THREE.MeshBasicMaterial({ 
      side: THREE.FrontSide, 
      map: planeTexture
    })
  );
  plane.rotateX( Math.PI / ( -2 ) );
  plane.rotateZ( Math.PI / 2 );
  plane.name = 'worldFloor';
  plane.castShadow = false;
  plane.receiveShadow = true;
  scene.add( plane );

}

/**
 * 3D 빛 환경을 설정합니다.
 */
function initLights() {

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0.35);
  hemisphereLight.name = 'hemisphereLight';
  // hemisphereLight.castShadow = true;
  scene.add(hemisphereLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
  dirLight1.position.set( 10, 12, 9 );
  dirLight1.target.position.set(0, 0, 0);
  dirLight1.castShadow = true;
  dirLight1.name = 'dirLight1';
  scene.add( dirLight1 );

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
  dirLight2.position.set( 13, 12, -10 );
  dirLight2.target.position.set(0, 0, 0);
  dirLight2.name = 'dirLight2';
  scene.add( dirLight2 );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
  ambientLight.name = 'ambientLight';
  scene.add( ambientLight );

}

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

    // const facilities = await fetch(URL.importance + data.building_code)
    //                          .then(res => res.json())
    //                          .then(datas => {

    //                            let result = [];
    //                            datas.forEach(data => { result.push(data); });
    //                            return result;

    //                          });
    const facilities = facilitiesExamples;

    model.userData = {

      id: data.building_code,
      building_phone_num: data.building_phone_num,
      management_team: data.management_team,
      management_team_phone_num: data.management_team_phone_num,
      importance_rooms: facilities,
      others: data.others,

      onPointerOver: function() {
        for ( let child of model.children ) {

          child.currentHex = child.material.emissive.getHex();
          child.material.emissive.setHex( 0xff0000 );
          container.style.cursor = 'pointer';
    
        }
      },

      onPointerOut: function() {
        for ( let child of model.children ) {

          child.material.emissive.setHex( 0 );
          container.style.cursor = 'default';

        }
      },

      onClick: function() {

        controls.target.copy(model.position);
        controls.update();
        setDetails(model);
        details.classList.add('active');
        // console.log( model.userData.importance_rooms );
        sessionStorage.setItem('building_code', model.userData.id);

      }

    }
    
    // removing spaces from the model.name as this font does not support spaces.
    createFont( model.position, model.name.replace( /\s/g, '' ) );
    buildings.push(model);
    scene.add(model);

    // subCategories Event Listener
    subCategories.forEach( ( subCategory ) => {

      const subId = subCategory.getAttribute( 'data-id' );
      if ( subId === model.userData.id ) {

        const target = model;
        // hover event
        subCategory.addEventListener('mouseover', () => { target.userData.onPointerOver(); });
        subCategory.addEventListener('mouseout', () => { target.userData.onPointerOut(); });
        // click event
        subCategory.addEventListener('click', e => { 
          e.preventDefault();
          if (width < 1024) {
            controls.target.copy(model.position);
            controls.update();
          } else {
            target.userData.onClick();
          }
          mapMenuBtn.classList.remove('active');
          mapMenu.classList.remove('active');
        });

      }
    });

  }, progress => {
    // console.log((progress.loaded / progress.total * 100).toString() + "% loaded!");
  }, error => {
    console.error( error );
  } );

}

/**
 * 건물 이름 표시를 위한 3D 폰트 생성 함수입니다.   
 * `position` 에 해당하는 위치에서 `THREE.Line` 과 `THREE.Mesh (text)` 을 갖는 `THREE.Group` 을 생성합니다.
 * @param { THREE.Vector3 } position position of the target model
 * @param { string } name name of the target building
 */
async function createFont(position, name) {
  if (!position || !name) { console.error("Creating Font Failed: parmas undefined"); return; } 
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
  await loader.load('./fonts/NanumSquareRound.json', font => {

    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: false,
      side: THREE.FrontSide,
    });

    const message = name;
    const shapes = font.generateShapes(message, 5); // 10 );
    const geometry = new THREE.ShapeGeometry(shapes);

    // make shape ( N.B. edge view not visible )
    const text = new THREE.Mesh(geometry, material);
    text.position.set(25, 25, 25);
    text.material.depthTest = false; // for renderOrder
    group.add( text );

  }); //end load function

  // Create Group:
  const group = new THREE.Group();
  group.add( line );
  // group.add( plane );
  group.position.copy( position );
  fonts.push( group );
  group.renderOrder = 1; // renderOrder (z-index)
  group.name = name + ' Font';
  scene.add(group);

}

/**
 * 선택된 모델 정보를 토대로 관련 정보를 `details`에 입력합니다.
 * 주요 시설 정보(`setFacList`)와 건물 관련 공지사항(`setDetailNotice`)을 설정합니다.
 * 
 * @param {THREE.Group} model building model information of `INTERSECTED`
 */
function setDetails(model) {

  const mng_team = document.getElementById('mng_team');
  const mng_num = document.getElementById('mng_num');
  const buildingImg = document.getElementById('buildingImg');

  if (mng_team) mng_team.innerText = (model.userData.management_team) ? model.userData.management_team : '정보가 없습니다.';
  if (mng_num) mng_num.innerText = (model.userData.management_team_phone_num) ? model.userData.management_team_phone_num : '정보가 없습니다.';
  buildingImg.src = `./images/buildings/${model.userData.id}.jpg`;

  setFacList(model);
  setDetailNotice(model.userData.id);

}

/**
 * `details` 중에서 주요 시설 정보를 설정합니다.   
 * 주요 시설을 선택할 수 있는 클릭 이벤트도 설정합니다.   
 * 
 * `ul.fac-list`에 child가 있으면 모두 제거하는 작업을 포함합니다.
 * @param {THREE.Group} model building model information of `INTERSECTED`
 */
function setFacList(model) {

  const ul = document.querySelector('ul.fac-list');
  const detailBuildingTitle = document.getElementById('detailBuildingTitle');
  // remove all the child nodes
  while (ul.hasChildNodes()) { ul.removeChild(ul.firstChild); }

  detailBuildingTitle.innerText = model.name;
  if (model.userData.importance_rooms.length > 0) {

    model.userData.importance_rooms.forEach(room => {
      const li = document.createElement('li');
      li.innerHTML = room.facilities;
      li.setAttribute('data-room', room.room_code);
      li.setAttribute('data-floor', room.floor);
      li.addEventListener('click', () => { 

        activeFacLi && activeFacLi.classList.remove('active');

        if (sessionStorage.getItem('room_code') === li.getAttribute('data-room')) {
          sessionStorage.removeItem('room_code');
          sessionStorage.removeItem('floor');
          return;
        }

        li.classList.add('active');
        sessionStorage.setItem('room_code', li.getAttribute('data-room'));
        sessionStorage.setItem('floor', li.getAttribute('data-floor'));
        activeFacLi = li;

      });
      ul.appendChild(li);
    })

  } else {
    // initializing
    const li = document.createElement('li');
    li.innerHTML = '주요 시설 정보가 없습니다.';
    ul.appendChild(li);

  }
}

/**
 * `details` 중에서 선택된 건물과 `building_code`가 일치하는 공지사항을 불러와 설정합니다.   
 * 
 * `ul.detail-notice-list`의 child가 있으면 모두 제거하는 작업을 포함합니다.
 * @param {string} building_code building id code of `INTERSECTED`
 */
function setDetailNotice(building_code) {

  const ul = document.querySelector('ul.detail-notice-list');
  while(ul.hasChildNodes()) { ul.removeChild(ul.firstChild); }

  const filtered = detailNoticeDatas.filter((item) => item.building_code === building_code);
  // console.log(filtered);

  if (filtered.length > 0) {

    filtered.forEach(notice => {

      const li = document.createElement('li');
      const aLink = document.createElement('a');
      const span = document.createElement('span');
      aLink.innerHTML = notice.notice;
      aLink.href = notice.site;

      span.className = 'date';
      span.innerHTML = notice.date;
      aLink.append(span);
      li.append(aLink);

      ul.append(li);

    })

  } else {
    // initializing
    const li = document.createElement('li');
    li.innerHTML = '공지사항이 없습니다.'
    ul.appendChild(li);

  }

}

/**
 * `pointer` 에서 `camera` 가 바라보는 방향으로 `raycaster` 를 생성해 교차하는 아이템을 가져옵니다.   
 * 
 * `buildings[]` 에서 `raycaster` 와 교차하는 아이템을 확인하여 가장 앞에 있는 것을 `INTERSECTED`로 설정한 후 `onPointerOver()` 를 수행합니다.   
 * 교차하는 아이템이 바뀌거나 사라졌을 때는 기존 아이템의 `onPointerOut()`를 수행합니다.
 */
function getIntersects() {

  raycaster.setFromCamera(pointer, camera);
  intersects = raycaster.intersectObjects(buildings, true);
  if (intersects.length > 0) { 

    if (INTERSECTED) INTERSECTED.userData.onPointerOut();
    INTERSECTED = intersects[0].object.parent;
    INTERSECTED.userData.onPointerOver();
  
  } else { 
    
    if (INTERSECTED) INTERSECTED.userData.onPointerOut();
    INTERSECTED = undefined;
  
  }

}

/**
 * 각 단과대별로 필터링 된 배열을 ul element로 생성합니다.
 * @param {Array} filtered an array of filtered notices
 * @param {Number} index an index number to set default element as active
 */
function createNoticeList(filtered, index) {

  const header = document.querySelector('ul.notice-header-wrap');
  const list = document.querySelector('div.notice-list-wrap');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');

  li.className = 'notice-list';
  if (index === 0) { li.classList.add('active'); } // Set First Element as active 
  h3.innerText = filtered[0].dept;
  li.append(h3);
  header.append(li);

  const ul = document.createElement('ul');
  ul.className = 'notices';
  if (index === 0) { ul.classList.add('active'); }

  filtered.forEach(item => {
    
    const noticesLi = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');

    a.href = item.site;
    a.innerText = item.notice;
    span.innerText = item.date;

    noticesLi.append(a);
    noticesLi.append(span);
    ul.append(noticesLi);

  });

  list.append(ul);

}

/**
 * 단과대 별 공지사항들의 내용이 담긴 ul element들 중 `last`를 비활성화하고, `current`를 활성화합니다.
 * @param {Number} last an index of activated noticeUl
 * @param {Number} current the target index of noticeUl to activate
 */
function activateNotice(last, current) {

  const noticesUls = document.querySelectorAll('ul.notices');
  noticesUls[last].classList.remove('active');
  noticesUls[current].classList.add('active');

}