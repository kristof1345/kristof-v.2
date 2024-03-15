import React from "react";
import Post from "./Post";

export default function UnfoldPosts({ posts }) {
  return (
    <div>
      {posts.map((postx, i) => (
        <Post key={i} post={postx} />
      ))}
    </div>
  );
}
