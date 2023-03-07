// 이 안에 코멘트라는 컴포넨트를 만들어서 css랑 연결시켜서 스타일링 해라. 이걸 app.jss에서 불러주면 된다.
import React from 'react'
import './Comment.css';

function Comment(props) {
  return (
    <div className='wrapper'>
      <div className='img-box'>
        <img src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/11/11/116428366.2.jpg" alt="아이유" />
      </div>

      <div className='content-container'>
        <span className='name-text'>asdf{props.name}</span>
        <span className='comment-text'>asdfasdf{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment