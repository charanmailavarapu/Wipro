import axios from 'axios';
import React, {Component, useState} from 'react';

const PostSearch = () => {
  const [postId, setpostId] = useState(" ")
  const [postuserId, setpostuserId] = useState(" ")
  const [postData, setpostData] = useState({});

  const handleuserIdChange = event => {
    setpostuserId(event.target.value)
  }

  const handleIdChange = event => {
    setpostId(event.target.value)
  }


  const show = () => {
    let eid = parseInt(postId);
    axios.get("https://jsonplaceholder.typicode.com/posts/"+eid).then(
      (response) => {
        setpostData(response.data)
      }
    )
  }

  return (
    <div>
      <label>Post userId : </label>
      <input type="number" name="postuserId"
        value = {postuserId} onChange={handleuserIdChange} /> <br />
      <label>Post Id: </label>
      <input type="number" name="postId"
        value = {postId} onChange={handleIdChange} /> <br />
      <input type="button" value="Show" onClick={show} />
      <hr />

      Post userId : <b> {postData.userId}</b> <br />
      Post Id : <b>{postData.id}</b> <br />
      Post Title : <b>{postData.title}</b> <br />
      Post Body : <b>{postData.body}</b>
    </div>
  )
}

export default PostSearch;
  