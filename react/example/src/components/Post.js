import React from 'react'
import'./Post.css'
import Comment from './Comment'

export default function Post(props) {
    const addNewComment = () => {
        props.addComment(props.pid)
    }
  return (
    <div className="post">
        <div id={"p"+props.pid}>
            {props.text}
        </div>
        <div>
            {props.comments.map((comment,index)=><Comment key={index} text={comment.text}/>)}
        </div>
        <button onClick={addNewComment}>
            Add Comment!
        </button>
    </div>
  )
}

