const floors = document.querySelectorAll('#floors>li');
const roomNums = document.querySelectorAll('#detail .img-wrap .roomNum');
const floorDefaultHeight = 80;

const floorsLists = [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303, 304],
    [401, 402, 403, 404],
];
const receivedBgUrl = "../images/details-example.jpg";

// 로딩 화면 구현 시 필요:
// let isLoading = Boolean();
// let isComplete = Boolean();

const setFloorList = (info) => {
    if (!info.isDesignated) {
        for (floor of info.floorsList) {
            console.log(floor);
        }
    } else {
        // something action here
    }
}

const setFloorBg = (bgUrl) => {
    const target = document.querySelector('#detail .img-wrap');
    target.style.background = `url(${bgUrl}) no-repeat center center / contain`;
}

// setFloorList(receivedBuildingInfo);
setFloorBg(receivedBgUrl);

let prevElement = undefined;
floors.forEach((floor, i) => {
    const floorTitle = floor.querySelector('.floor-title');
    floorTitle.addEventListener('click', e => {
        e.preventDefault();
        const roomsHeight = floor.querySelector('#rooms').clientHeight;

        // active 되어있다면 제거하고 종료
        if (floor.classList.contains('active')) {
            floor.classList.remove('active');
            floor.style.height = floorDefaultHeight + 'px';
            return;
        }

        // 한 층만 표시하기 위해서 활성화되었던 element를 저장하고,
        // 다른 element 클릭 시 저장한 이전 element를 비활성화
        if (prevElement) {
            prevElement.classList.remove('active');
            prevElement.style.height = floorDefaultHeight + 'px';
        }

        // 선택한 층에 따라 표시되는 호수(방 번호) 변경
        floor.classList.toggle('active');
        const fl = floorsLists[i];
        roomNums.forEach((rn, j) => {
            rn.innerHTML = `${fl[j]}`;
        });
        
        
        prevElement = floor;
        floor.style.height = floorDefaultHeight + roomsHeight + 'px';
    })
});