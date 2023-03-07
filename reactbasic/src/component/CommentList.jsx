import React from "react";
import Comment from "./Comment";
// 여기에 임포트 하는 이유는 작성된 데이터를 comment jsx에 쏴주기 위해서

const comments = [
  {
    name : "이예진1", 
    comment : "안녕하세요. 이예진입니다."
  },
  {
    name : "이예진2", 
    comment : "리액트 재밌다~!."
  },
  {
    name : "이예진3", 
    comment : "리액트 재미없어!!!!"
  },
]



// 클릭할 때마다 i번째 div가 사라지게 하면 되지.

function CommentList() {



  return (
    <div>
      {
        comments.map((comment, i) => {
          return (
            <Comment name={comment.name} comment={comment.comment} del={comments.splice(i,1)} key={i}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;