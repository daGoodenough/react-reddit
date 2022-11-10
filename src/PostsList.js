import React from "react";
import Post from "./Post.js";

const PostsList = (props) => {
  const postItems = props.posts.map((post, index) => {
    return <Post upvote={props.upvote} key={index} index={index} post={post} />;
  });

  return (
    <div>
      <ul className="col-md-4 list-group">{postItems}</ul>
    </div>
  );
};
// so this is returning an array of postsJ??
export default PostsList;
