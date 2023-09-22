import * as URL from './url.js'

const floorList = document.getElementById('floors');
const roomList = document.getElementById('rooms');
const roomNums = document.querySelectorAll('#detail .img-wrap .roomNum');
const descOpenBtn = document.getElementById('descOpenBtn');
const descCloseBtn = document.getElementById('descCloseBtn');
const descMenu = document.getElementById('descMenu');

const f1 = [
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "1",
        room_no: 101,
        room_code: "0-0101-0",
        facilities: "대강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "1",
        room_no: 102,
        room_code: "0-0102-0",
        facilities: "계단강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "1",
        room_no: 103,
        room_code: "0-0103-0",
        facilities: "정보융합부 실습실2",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "1",
        room_no: 104,
        room_code: "0-0104-0",
        facilities: "정보융합부 실습실1",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "1",
        room_no: 105,
        room_code: "0-0105-0",
        facilities: "코딩컨설팅룸",
        category: null,
        importance: false
    },
];
const f2 = [
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "202",
        room_code: "0-0202-0",
        facilities: "강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "203",
        room_code: "0-0203-0",
        facilities: "강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "204",
        room_code: "0-0204-0",
        facilities: "강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "205",
        room_code: "0-0205-0",
        facilities: "강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "206",
        room_code: "0-0206-0",
        facilities: "강의실",
        category: null,
        importance: false
    },
    {
        building: "새빛관",
        building_code: "08",
        building_phone_num: null,
        floor: "2",
        room_no: "207",
        room_code: "0-0207-0",
        facilities: "회의실",
        category: null,
        importance: false
    }
];

const receivedFloorList = f1.concat(f2);
const receivedBgUrl = "../images/details-example.jpg";

let rooms, prevElement, prevDesc, floors, building_code;

window.addEventListener('unload', () => {
    sessionStorage.removeItem('floor');
    sessionStorage.removeItem('building_code');
})

init();

async function init() {

    sessionStorage.setItem('floor', 'B2');
    sessionStorage.setItem('building_code', "08");
    building_code = sessionStorage.getItem( "building_code" );

    descOpenBtn.addEventListener('click', () => { descMenu.classList.add('active'); });
    descCloseBtn.addEventListener('click', () => { descMenu.classList.remove('active'); });   

    // const rawData = await fetch(URL.detail + building_code, { method: "GET" })
    //                         .then(res => res.json())
    //                         .then(json => { return json; })
    const rawData = receivedFloorList;
    const classifiedFloors = classifyList(rawData);
    // console.log( classifiedFloors );
    createFloors( classifiedFloors );
    if ( sessionStorage.getItem( 'floor' ) ) {

        const floor = ( '00' + sessionStorage.getItem( 'floor' ) ).slice( -2 );
        activateFloor( document.getElementById(floor), 0, classifiedFloors );
        // sessionStorage.removeItem('floor');
        // sessionStorage.removeItem('building_code');

    } else {
        // activate 1st floor as default
        activateFloor( document.getElementById('01'), 0, classifiedFloors );

    }
    
    // createFloors( receivedFloorList );
    setFloorBg( receivedBgUrl );

}

/**
 * 건물에 대한 정보 중 총 층(floor)수와 호(room)수를 받아와서
 * detail_example.html에 Floor List를 구성하는 새 element 들을 생성하고,
 * 클릭 이벤트를 설정합니다.
 * 
 * @param { number } floorCount the integer number of floors
 * @param { number } roomCount the integer number of rooms in each floors
 * @result Create new elements under `ul#floors`
 */
function createFloors( classifiedFloors ) {

    for ( let i = 0; i < classifiedFloors.length; ++i ) {

        const liFloor = document.createElement( 'li' );
        const div = document.createElement( 'div' );
        const span = document.createElement( 'span' );

        div.className = 'text'; // div.text
        span.className = 'floor-title'; // span.floor-title
        span.innerText = `${classifiedFloors[i][0].floor}F`;

        div.appendChild( span ); // div > span
        liFloor.appendChild( div ); // li > div > span

        /*
        const ul = document.createElement( 'ul' );
        ul.setAttribute( 'id', 'rooms' ); // ul#rooms

        for ( let j = 0; j < classifiedFloors[i].length; j++ ) {

            const liRoom = document.createElement( 'li' );
            liRoom.innerText = classifiedFloors[i][j].room_no;
            liRoom.setAttribute( 'id', classifiedFloors[i][j].room_code );
            ul.appendChild( liRoom ); // ul > li

        }
        */

        liFloor.setAttribute( 'id', ( '00' + classifiedFloors[i][0].floor ).slice( -2 ) );
        // liFloor.appendChild( ul ); // li > div + ul
        floorList.appendChild( liFloor );

    }

    floors = document.querySelectorAll( '#floors>li' );
    // console.log( "Floors:\n", floors );
    floors.forEach( ( floor, i ) => {
        // 1층을 Default로 보여주기 위한 설정
        // if (i === 0) { activateFloor( floor, i, classifiedFloors ); }
    
        const floorTitle = floor.querySelector( '.floor-title' );
        floorTitle.addEventListener( 'click', ( e ) => {
    
            e.preventDefault();
            // 한 층만 표시하기 위해서 활성화되었던 element를 저장하고,
            // 다른 element 클릭 시 저장한 이전 element를 비활성화
            if ( prevDesc ) { prevDesc.classList.remove( 'active' ); }
            if ( prevElement ) { prevElement.classList.remove( 'active' ); }
    
            // 선택한 층에 따라 표시되는 호수(방 번호) 변경
            roomList.innerHTML = '';
            activateFloor( floor, i, classifiedFloors );
    
        } );
    
    } );

}

/**
 * `main#detail > div.img-wrap > div.imgBg` 의 background url을 `bgUrl`로 설정합니다.
 * @param { string } bgUrl url string of the background image
 */
function setFloorBg ( bgUrl = "" ) {

    const target = document.querySelector( '#detail .img-wrap .imgBg' );
    target.style.background = `url(${ bgUrl }) no-repeat center center / contain`;

}

/**
 * `ul#floors` element 아래의 `li` element 들 중에서, i 번째 요소를 활성화합니다.  
 *  
 * 활성화는 다음과 같은 작업을 포함합니다.
 * 
 * * `roomNums` 요소 내의 `span`(방 번호)과 `.desc p`(해당 방 설명)의 innerText 변경
 * * `rooms` 에 클릭 이벤트 설정
 * * `prevElement`에 현재 선택된 `floor` 저장
 * @param { Element } floor `li` element in floors list
 * @param { number } i index value of the element
 * @param { Array } classifiedFloors an array of classified floors
 */
function activateFloor ( floor, i, classifiedFloors ) {

    for ( let j = 0; j < classifiedFloors[i].length; j++ ) {

        // 시설 리스트 생성
        // if문은 임의로 작성했습니다.
        // 추가 정보 필요 유무에 따라 Room List를 구성하는 element가 달라집니다.
        if( j % 2 == 0 )
            roomList.appendChild( listAddRoom( classifiedFloors[i][j] ) ); // ul > li
        else
            roomList.appendChild( listAddRoomAccordion( classifiedFloors[i][j] ) ); // ul > li

        // 평면도 상에 호수 글자 생성
        // imgBg[0].appendChild( mapAddRoom( classifiedFloors[i][j] ) );
    }

    floor.classList.add( 'active' );

    /*
    floor.classList.add( 'active' ); 
    const activeFloor = classifiedFloors[ i ]; 

    roomNums.forEach( ( roomnum, idx ) => {

        roomnum.querySelector( 'span' ).innerText = activeFloor[ idx ].facilities;
        roomnum.querySelector( '.desc p' ).innerText = `${ activeFloor[ idx ] } description`;

    });
    
    rooms = floor.querySelectorAll( '#rooms li' );
    console.log( "activated rooms: \n", rooms );

    rooms.forEach( ( room, idx ) => {
        room.addEventListener( 'click', () => {

            if ( prevDesc ) { prevDesc.classList.remove( 'active' ); }
            const desc = roomNums[ idx ].querySelector( '.desc' );
            desc.classList.add( 'active' );
            prevDesc = desc;

        })
    });
    */
    // remember previously activated floor
    prevElement = floor;

}

/**
 * i 층의 호(room)수를 받아와서
 * detail_example.html에 Room List를 구성하는 새 element 를 생성합니다.
 * 별도의 정보가 필요없는 시설이므로, `li`(시설명) element 만 생성합니다.
 *
 * @param roomInfo classifiedFloors[i][j]
 * @returns {HTMLLIElement} `li` element in rooms list
 */
function listAddRoom( roomInfo ) {

    const liRoom = document.createElement( 'li' );
    liRoom.className = 'list-group-item';
    liRoom.innerText = roomInfo.room_no + ' ' + roomInfo.facilities;
    liRoom.setAttribute( 'id', roomInfo.room_code );

    return liRoom;
}

/**
 * i 층의 호(room)수를 받아와서
 * detail_example.html에 Room List를 구성하는 새 element 를 생성합니다.
 * 별도의 정보가 필요한 시설이므로, `button`(시설명) 과 `div`(시설정보) 가 담긴 `li` element 를 생성합니다.
 *
 * @param roomInfo classifiedFloors[i][j]
 * @returns {HTMLLIElement} `li` element in rooms list
 */
function listAddRoomAccordion( roomInfo ) {

    const accor_liRoom = document.createElement( 'li' );
    accor_liRoom.className = 'accordion-item';

    const accor_button = document.createElement( 'button' );
    accor_button.className = 'accordion-button collapsed';
    accor_button.type = 'button';
    accor_button.setAttribute( 'data-bs-toggle', 'collapse' );
    accor_button.setAttribute( 'data-bs-target', '#info-' + roomInfo.room_code );
    accor_button.innerText = roomInfo.room_no + ' ' + roomInfo.facilities;
    accor_button.setAttribute( 'id', roomInfo.room_code );

    const accor_body = document.createElement( 'div' );
    accor_body.className = 'accordion-collapse collapse';
    accor_body.setAttribute( 'data-bs-parent', '#rooms' );
    accor_body.id = 'info-' + roomInfo.room_code;

    const accor_body_text = document.createElement( 'div' );
    accor_body_text.className = 'accordion-body';
    accor_body_text.innerText = roomInfo.room_code + ' 관련 추가 정보';

    accor_liRoom.appendChild( accor_button ); // li > button
    accor_body.appendChild( accor_body_text ); // div > div
    accor_liRoom.appendChild( accor_body ); // li > button + div

    return accor_liRoom;
}

/**
 * 한 건물의 분류되지 않은 방 정보 리스트를 받아와서 층 별로 분류하고,
 * 정보를 층 별로 분류하고, 방 번호를 오름차순으로 정렬하여 2차 Array 형태로 리턴합니다.
 * 
 * `room_code`에 regular expression 을 적용해 검색하여 분류합니다.
 * 
 * @param { Array } json raw data(floor list) received from server
 * @returns a classified floor list
 */
function classifyList( json ) {
    
    let classifiedFloors = [];
    let floors = json.map(room => room.floor);
    let uniqFloors = [... new Set(floors.sort(compareFloors))];
    uniqFloors.forEach((uniqFloor) => {

        let floorNum, regex;
        if (/^B+/.test(uniqFloor)) {
            // if floor element starts with 'B'
            floorNum = ('00' + uniqFloor.substr(1, 1)).slice(-2);
            regex = new RegExp(`^1-${floorNum}+`);
        } else {
            floorNum = ('00' + uniqFloor).slice(-2);
            regex = new RegExp(`^0-${floorNum}+`);
        }

        const classifiedFloor = json.filter(data => regex.test(data.room_code));
        classifiedFloors.push(classifiedFloor.sort(function( a, b ) { return a.room_no < b.room_no ? -1 : a.room_no > b.room_no ? 1 : 0; }));

    });

    return classifiedFloors;
}

/**
 * 건물 층 값인 문자열(B1, 10, 1, ...) 정렬을 위한 함수입니다.
 * 문자열이 "B"(대문자)로 시작하면, B를 "-"로 바꾸어 비교합니다.
 * 
 * @param {String} a a value of floor to compare
 * @param {String} b a value of floor to compare
 * @returns Compared Result for sort() function.
 */
function compareFloors(a, b) {
    
    let _a, _b;
    if (a.startsWith("B")) { _a = a.replace("B", "-") } else { _a = a }
    if (b.startsWith("B")) { _b = b.replace("B", "-") } else { _b = b }
    return _a - _b;

}