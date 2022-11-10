import React, { Component } from 'react';

const Post = (props) => {
  return (
    <li>
      <span>{props.post.user} -{props.post.text}</span>
      <p>{props.post.upvotes}</p>
      <button onClick={() => {props.upvote(props.index)}} className="btn btn-success">UPVOTE</button>
    </li>
  )
}

export default Post;
