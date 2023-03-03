/* eslint-disalbe */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  let user = 'J';
  let [count, setCount] = useState(0);
  // count에 0을 넣은 것이랑 똑같은 코드
  // setCount는 함수
  let [like, setLike] = useState(0);
  // usestate는 변수처럼 자료를 보관할 수 있는 state 문법이다. 
  // 우선 그냥 변경함수를 호출해서 변경한다 정도만 기억하자. 
  let [title, setTitle] = useState(["dw아카데미 503호", "dw아카데미 502호", "dw아카데미 501호"]);
  // 변수에 들어있는 데이터 html에 넣기
  // 이 방법은 jsx 중괄호 문법 사용
  // 한곳에다가 여러가지 자료를 저장하고 싶을 때 arry[]를 사용한다.
  // let [bgc,setBgc] = useState('');
  let [bgColor,setBgc] = useState('');

  let changeBg = () => {
    let newBg = bgColor == 'white' ? 'red' : 'white';
    setBgc(newBg);
  }


  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <h1>Hello, {user}!</h1>
      <p>this is a react app</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{
          setCount(count + 1)
          // setCount 호출될 때마다 즉 버튼을 클릭 할 때마다 count에 1을 더해준다는 함수를 setCount에 넣는다.
        }}>Click me</button>
      </div>

      <div className='list'>
        <h4>{title[0]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div>

      <div className='list'>
        <h4>{title[2]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div>
        <button onClick={()=>{
          let copy = [...title]; 
        copy.sort();
        setTitle(copy);
        // 배열에서 값을 바꿀 땐 반드시 딥카피로 해야지 샐로우카피로 하면 안된다. 왜냐하면 샐로우카피는 원본을 바꾸기 때문에 jsx에서는 안 먹힌다.
        }}>글 제목 변경</button>
{/* 
        <button onClick={()=>{

        setBgc('yellow'); // 변경함수에 변경값을 그냥 넣는다.
        }}>배경색 변경</button> */}

        {/* <button onClick={()=>{
        setBgc(bgc==='' ? 'red' : '');
        }}>배경색 변경</button> */}

        <button onClick={changeBg}>배경색 변경</button>

    </div>
  );
}

export default App;




