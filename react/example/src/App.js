import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Comment from './components/Comment';
import { useState } from 'react';

function App() {

  const [posts,setPosts] = useState([{text:"hi",pid:1,comments:[{text:"goodbye",cid:1}]},
  {text:"hello",pid:2,comments:[{text:"bye",cid:2},{text:"byebye",cid:3}]}])
  let pid = 2
  let cid = 3




  const addPost = () => {
    pid = pid+1
    const newPost = {text:"New post!",pid:pid,comments:[]}
    const newPosts = [...posts,newPost]
    setPosts(newPosts)

  }

  const addComment = (pid) => {
    const newPosts = [...posts]
    for(let postIndex in newPosts){
      cid = cid+1
      if(newPosts[postIndex].pid === pid ){
        newPosts[postIndex].comments.push({text:"new Comment",id:"c"+cid})
      }
    }
    setPosts(newPosts)


  }

  return (
    <>
      <button onClick={addPost}>Add Post</button>
      {posts.map((post,index)=> <Post addComment={addComment} key={index} text={post.text} pid={post.pid} comments={post.comments} />)}
    </>
  );
}

export default App;
