/* eslint-disalbe */
import logo from './logo.svg';
import './App.css';
import State from './component/state';
import { useState } from 'react';
import Box from './component/Box';
import './component/State.css';
import Comment from './component/Comment';


function App() {
  let num = 0;
  const [count, setCount] = useState(0)
  console.log(count);
  let increase = () => {
    num = num + 1;
    setCount(count + 1);
    console.log("num", num, "state", count);
    // 이렇게 하면 num이 1만 나온다. 변경값이 나오면 이 함수가 재랜더링 되면서 function이 다시 다 재실행된다. 즉 변수에 담긴 값은 다시 초기화된다.
    // state는 값을 저장하고 반복하지만 한박자 느리다고 생각하면 된다. 
    // 다 재실행되기 때문에 다 한번 훑고 실행이 되기 때문에 화면에는 가령 40이지만 콘솔로그에는 39라고 뜬다.

    // 이렇게 이해하는 것이 맞는지? 버튼을 누르면 increase 함수가 실행이 되는데
    // 그 안에 있는 setCount가 실행 되고 그 다음 콘솔로그가 실행되어야 increase함수가 완전히 실행이 되는 것이다.
    // 그렇기 때문에 콘솔로그는 setcount의 함수 결과가 반영되기 전의 카운트 값을 보여주는 것
    // 그리고 화면상에는 increase함수가 완전히 실행되어 변한 count 값이 반영된다고 생각하면 되는지?
  }

  // let num1 =[1,2,3,4]
  // let name = ['해민', '승호', '원재', '재학']

  let name = ['라라라', '리리리', '로로로']
  let talk = ['안녕하세요. 집에가고 싶다.', '리액트 재밌따!!', '리액트 리액트 리액트']
  


  return (
   <div className='App'>
    <Comment/>

   </div>
 );
}

export default App;


// 리엑트 자체가 stat에 반응하게 만들어졌다 그래서 리엑트라고 하는 것이다.
// 그래서 이 스테이트 변경함수에 변경된 값이 있을 때 실행이 되도록 하는 것이다. num = num + 1에는 반응을 안 한 이유
// 리액트는 변수값이 업데이트 됐다고 ui를 재렌더링하지는 안흔다.
// 재랜더링될 때는 state가 변경되었을 때면 ui를 재렌더링한다.
// 그래서 usestate를 써야 한다.


// usestate 사용 방법
// 1. import { useState } from 'react'; react에서 usestate를 데려온다.
// usestate는 리액트에서 제공하는 함수 중 하나이다. 리액트에서는 이것을 훅이라고 부른다. 즉 usestate는 훅 중에 하나이다.
// 그래서 usestate 함수가 무엇을 리턴하느냐??? 했을 때 array 배열을 리턴하는데 아이템이 2개 들어있는 배열(array)를 리턴한다.
// 그 배열 첫번째에서는 초기값을 담고 있는 state 변수, 두번째에 있는 애는 state 값을 변경할 수 있또록 도와주는 set함수
// 이 두가지 값을 배열로 리턴한다.
// state를 변수처럼 사용하면 안되고 값을 변경할 때는 변경함수를 호출해서 값을 그 안에 집어 넣어야 한다.


// state값이 업데이트 될 때마다 function App이란 앱을 다시 실행시키면서 변경된 UI를 업데이트한다.
// 즉 함수가 다시 실행되기 때문에 변수는 다시 초기화되는 것이다.
// 변수는 값을 저장하지 않고 함수가 호출될 때바다 초기화 된다.


// 왜 한박자 늦게 반응을 하는지
// STATE 값이 변경되어 함수가 호출될 때 바로 아 여기에 변경값이 있으니 바로 변경값을 실행하는 것이 아니라, 
// 변경되어야 하는 set함수들을 싹 모아서 함수를 다 체크한 뒤에 나서 한번에 처리한다. 그래서 이걸 비동기적이라는 것이다.
// 그래서 state는 기존값을 잃어버리지 않고 기억하고 있다. 즉 중요한 것은 state에 저장하는 습관을 두는 것이 좋다.


// ,콘솔로그에 결과 값이 두개 찍히는 이유는
// app.js에 작성한 내용은 index.jsx를 거쳐서 root라는 아이디 값을 div에 그려진다.
// </React.StrictMode>를 지우면 된다. 이게 뭐냐고 리액트로 개발할 때 장재먹인 문제가 있는지 검사해주는 모드이다.
// </React.StrictMode>가 스스로 문제점을 찾아주는 것은 아니지만,
// 문제가 될 수 있는 함수를 두번 실행해서 그 결과값이 다르면 더 쉽게 문제를 찾을 수 있게 도와주는 역할을 하는 것이다.


// index.js => index.html 파일과 App.js 파일을 연결해주는 연결 고리라고 생각하면 된다.




