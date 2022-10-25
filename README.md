# Youtube Clone

React를 이용해서 Youtube 클론</br></br>
메인 화면은 유튜브 인기영상 리스트를 보여주고 영상을 클릭하면 해당 영상을 볼 수 있다.</br>
키워드를 검색하면 키워드에 해당하는 영상 리스트를 보여준다.</br>
영상을 클릭하면 상세페이지를 보여준다.

<details open="open">
  <summary>개요</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#screen-shots">Screen Shots</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#what-i-learned">What I Learned</a></li>
  </ol>
</details>
</br>

---

## About The Project

드림코딩 React Basic Youtube Clone</br>
솔루션 보기 전 작성

<details>
  <summary>추가사항</summary>
  <ol>
    <li>Header에 알림 및 로그인 UI 추가</li>
    <li>SideBar UI 추가</li>
  </ol>
</details>

## Skills

- React JS
- HTML / CSS

## Screen Shots

- Homepage</br>
  <img src="public/screenshot/homepage.png" width="600">

- Detailpage</br>
  <img src="public/screenshot/detailpage.png" width="600">

## Fuctions

- Popular List(Homepage)
- Search List
- Detail page(Play video)

## Acknowledgements

- [Youtube Data Api](https://developers.google.com/youtube/v3/getting-started?hl=ko)
- [Font Awesome](https://fontawesome.com/)
- [Dream Coding](https://academy.dream-coding.com/)

## What I Learned

1. Search기능에서 input value값 가져오기 : Useref() 사용
2. Youtube API Key가 이전에 커밋된 파일에 노출되어 수정 : git rebase -i [수정을 시작할 커밋의 이전 커밋]

### input value값 가져오기

- 원래 코드

  - onChange 함수를 이용하여 value값 추출
  - input값을 입력할때마다 함수가 호출 된다는 점

```
  // app.jsx
  let value ='';

  function onHandleChange(e) {
    value = e.target.value;
  }
  function handleSearch() {
    youtube.search(value).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }

  // header.jsx
  <input
    onChange={onHandleChange}
    className={styles.input}
    onKeyUp={handleKeyUp}
    type="text"
    placeholder="Search"
  />
```

- 솔루션 코드

  - useRef()를 이용하여 js에서처럼 특정 DOM을 선택하여 활용할 수 있다.
  - 엘리먼트 크기, 스크롤바위치, 포커스 설정 등을 사용할 수 있다.

```
  // app.jsx
  const searchRef = useRef();

  function handleSearch() {
    youtube.search(searchRef.current.value).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }

  // header.jsx
  <input
    ref={searchRef}
    className={styles.input}
    onKeyUp={handleKeyUp}
    type="text"
    placeholder="Search"
  />
```

### 이전 커밋파일 수정하기

1. git rebase -i [수정을 시작할 커밋의 이전 커밋]
2. 수정해야하는 해당 commit에 edit명령어로 저장 후 실행
3. 해당 파일을 수정 후 git add . -> git commit --amend -> git rebase --continue 순으로 진행 후 완료
