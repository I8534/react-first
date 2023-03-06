import React from "react";
import {useState} from 'react';



function State() {
  let user = 'J';
  let [count, setCount] = useState(0);
  // count에 0을 넣은 것이랑 똑같은 코드
  // setCount는 함수
  let [like, setLike] = useState([0,0,0]);



  // usestate는 변수처럼 자료를 보관할 수 있는 state 문법이다. 
  // 우선 그냥 변경함수를 호출해서 변경한다 정도만 기억하자. 
  let [title, setTitle] = useState(["dw아카데미 503호", "dw아카데미 502호", "dw아카데미 501호"]);
  let x = title.map(function(state){
    return <div>state</div>;
  })
  // 변수에 들어있는 데이터 html에 넣기
  // 이 방법은 jsx 중괄호 문법 사용
  // 한곳에다가 여러가지 자료를 저장하고 싶을 때 arry[]를 사용한다.
  // let [bgc,setBgc] = useState('');
  let [bgColor,setBgc] = useState('');

  let changeBg = () => {
    let newBg = bgColor == 'white' ? 'red' : 'white';
    setBgc(newBg);
  }


// map함수가 아래의 어레이의 갯수만큼 리턴을 반복해준다.
// return에서 여러 줄이면 소괄호로 묶어서 쓴다.
// 매개변수를 쓰면 array의 변수들을 받아서 반복해준다.
  [1,2,3].map(function(num){
    return console.log(num);
  })

  let num = [1,2,3,4,5];
  let newNum = num.map((num)=> num + 1);
  console.log(num);
  console.log(newNum);



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

        {
          ['jung', 'jae', 'hak'].map(function(a){
            return a.toUpperCase()
          })
        }


      {
        title.map(function(a, i){

           return (
            <div className='list' key={i}>
            <h4>{a}</h4>
            <span onClick={()=>{
              let copy =[...like];
              copy[i]= copy[i]+1;
              setLike(copy)}}>👍 {like[i]}</span>
            <p>안녕하세요. 저는 이예진입니다.</p>
          </div>
          )
        })
      }

스테이

      {/* <div className='list'>
        <h4>{title[0]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div> */}

      {/* <div className='list'>
        <h4>{title[1]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div>

      <div className='list'>
        <h4>{title[2]}</h4>
        <span onClick={()=>{setLike(like + 1)}}>👍 {like}</span>
        <p>안녕하세요. 저는 이예진입니다.</p>
      </div> */}


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

export default State;
//-> 파일을 내보낼 준비가 다 된 것이다.
