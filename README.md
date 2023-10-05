# KWU-Kampus-Front

*Kwang-Woon University: Campus Tour* 프로젝트의 메인 화면인 3D 지도를 구현하기 위한 로컬 테스트 repository 입니다.

## Notice   

이 repository 에서는 서버 의존성을 임시로 제외하기 위해서, `main.js` 내에서 임시로 선언한 필요 데이터 리스트를 사용합니다.

원본 프로젝트는 서버와의 RESTful API를 통해 데이터 정보를 받아오고 있으나, 해당 서버는 http를 사용하고 있으므로 Security 정책에 맞지 않습니다.   

RESTful API 사용 부분은 주석 처리되어있으니, 코드 내에서 확인하실 수 있습니다.

## How to Run

github page 를 통해 해당 페이지를 publish 중이지만, 로컬 환경에서 실행하며 테스트해보고 싶으시면 다음 절차를 따라주세요.   

### 공통

1. 이 repository 를 clone 합니다.

2. 사용하시는 IDE의 clone된 파일 경로에서 terminal에 다음을 입력합니다.
   ```bash
   npm install
   ```
   위는 실행에 필요한 package 들을 설치합니다. (사실 three.js 하나만 씀)

[Terminal로 실행하기](#run-through-terminal)

[VSCode Extension으로 실행하기](#run-through-vscode-extension)

### Run through Terminal

3. terminal 에 다음을 입력합니다.
   ```bash
   npx vite
   ```
   or
   ```bash
   npx serve
   ```
   실행 결과에 출력된 localhost 주소를 브라우저에 입력하면 됩니다!

### Run through VSCode Extension

3. VSCode 로 clone 된 repository 를 엽니다.

4. `ritwickdey.LiveServer`라는 id를 가진 live server extension 을 설치합니다.

5. Open in Live Server 기능을 사용하면 열립니다!

## 3D Map References

### Three.js

이 프로젝트는 three.js 예제[three.js example: map control](https://threejs.org/examples/?q=map#misc_controls_map)에서 출발했습니다.   

화면 상의 건물들 이름을 표시한 폰트들은 [three.js example: geometry text shapes](https://threejs.org/examples/?q=font#webgl_geometry_text_shapes)를 참고했고,   

카메라 회전에 따라 글자들도 회전하면 가독성을 저해하므로, 글자들은 항상 카메라를 향하도록 추가적인 설정을 했습니다.

각 건물의 모델링은 [blender](https://www.blender.org/)를 사용해 직접 제작했습니다.   

Three.js 의 raycaster 요소를 참고해 화면상의 마우스 커서 인식 기능을 구현했습니다.   

환경맵(environmental map, 배경)에 사용된 소스는 [HDRIs](https://polyhaven.com/hdris)를 참고했습니다.   

exr 파일(Open Source HDR file)을 사용해서 3D 환경의 광원을 설정했습니다.   

directional, hemisphere, ambient light 도 설정했지만, 주된 광원은 exr 파일로 설정되어있습니다.



