// 이 안에 코멘트라는 컴포넨트를 만들어서 css랑 연결시켜서 스타일링 해라. 이걸 app.jss에서 불러주면 된다.
import React from 'react'
// import './Comment.css';

const styles = {
  wrapper : {
    display : 'flex',
    margin : '8px',
    paddin : '8px',
    border : '1px solid gray',
    borderRadius : '16px'
  },

  image : {
    width : '50px',
    height: '50px',
    borderRadius : '50%'
  },

  contentContainer : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    marginLeft : '8px',
  },

  nameText : {
    fontSize : '18px',
    fontWeight : 'bold',
  },

  commentText : {
    fontSize : '14px'
  }
}


function Comment(props) {



  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.image} src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/11/11/116428366.2.jpg" alt="아이유" />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}<button onClick={props.del}>x</button></span>
        
      </div>
    </div>
  )
}

export default Comment