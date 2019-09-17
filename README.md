# Javascript-Amazon-Codesquad

### Autocomplete Search Bar
![autocomplete](https://user-images.githubusercontent.com/37759759/65008807-82169680-d945-11e9-9e43-fba96b0dff47.gif)

### Carousel UI
![Carousel](https://user-images.githubusercontent.com/37759759/65009157-bfc7ef00-d946-11e9-967c-428c3f617ff3.gif)

## Introduction
Web Application에 쓰이는 검색창 UI와 캐러셀 UI를 구현했습니다. [아마존](https://www.amazon.com) UI의 기능을 참고해 만들었으며, Vanilla Javascript로 구현했습니다.
[자동완성 검생창 & 캐러셀 UI 데모링크](https://ssangq-amazon.herokuapp.com/)

## Requirements
- ES6 Classes를 사용한다.
- addEventListener를 사용한 Event 처리를 한다.
- MVC 구조에 대한 필요성을 고민해보고 그에 맞는 구조를 짠다.
- 비동기 통신과 제어 개선, 에러처리를 진행한다.
- ES Modules를 활용한다.
- Throttling과 Debouncing를 이해하고 구현한다.
- Web Server환경에 대한 이해와 이를 구축한다. (Express 활용)
- Promise의 원리를 이해하고 이를 간단하게 구현해본다.


### Features
1. 검색창
- i, j, b로 시작하는 제한된 단어에 대한 자동완성 기능 제공.
- 검색어 입력 후 Enter 또는 아이콘 클릭시 최근검색 기능 제공.
- 자동완성 및 최근검색 리스트 키보드의 화살표 키로 이동 가능하도록 구현.
2. 캐러셀
- 상단 메뉴 클릭시 관련 내용으로 슬라이드
- 화살표 좌/우 클릭시 다음 내용으로 슬라이드
- 부드러운 슬라이드 구현.

### Tech
- Javascript (ES2015+)
- Node.js
- Express
- Sass
- Modular Javascript
- Object-Oriented
- Asynchronous


### Challenge
#### 1. MVC 패턴에 대한 고민
- 고민
  - 반드시 Controller를 분리해야 하는가? 오히려 MVC Pattern을 사용하는 것이 복잡성을 더욱 가중시키지는 않을까?
  - View가 많아지면 이를 어떻게 관리해야 할 것인가?
  - Module의 데이터 흐름을 쌍방향으로 하는 것이 좋은가, 단방향으로 사용하는 것이 좋은가?
- 느낀점
  - 무조건 MVC pattern의 사용은 피하고, 단순한 구조에서는 Model과 View에서 controller의 기능을 수행하는 것이 복잡성을 줄이고 효율적이라고 생각했다.
  - 각각의 View에 Controller가 직접 접근해 작업하는 방식은 서로 다른 View의 상호 의존적 작업을 하기가 복잡해 이러한 작업을 할 수 있는 Main View를 만들어 각각의 View를 관리하고 Controller와 직접 작업하도록 구현했다.

#### 2. Promise then 체인에 대한 이해
- Promise가 then chain을 할 수 있는 것은 Promise를 return 하도록 구현
- Promise의 then chain이 동기적으로 처리하는 것은 then chain의 callback 함수와 callback 함수의 return value를 기억하여 순차적으로 실행 및 저장하도록 구현.

#### 3. 이벤트의 중복과 Debounce
- 최근검색 결과와 지연 출력되도록 구현한 자동완성 결과가 이벤트의 중복으로 함께 출력됨.
- 자동완성 기능 중 모든 입력에 대한 결과를 API로 요청
- Debounce를 적용해 이벤트의 중복을 막고 최종 입력에 대한 결과만 데이터 요청하여 해결.