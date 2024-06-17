import React from "react";
import Post from "./Post";
import OutOfPages from "./OutOfPages";

export default function UnfoldPosts({ posts }) {
  return (
    <div>
      {posts && posts.map((postx, i) => <Post key={i} post={postx} />)}
      {posts && posts.length === 0 && <OutOfPages />}
    </div>
  );
}
