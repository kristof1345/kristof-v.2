import React from "react";
import Post from "./Post";

export default function UnfoldPosts({ posts }) {
  return (
    <div>{posts && posts.map((postx, i) => <Post key={i} post={postx} />)}</div>
  );
}
