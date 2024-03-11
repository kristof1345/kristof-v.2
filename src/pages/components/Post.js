import React from "react";
import parse from "html-react-parser";

const Post = (post) => {
  console.log(post.post.title);

  return (
    <>
      <h2>{post.post.title}</h2>
      <div>{parse(post.post.content)}</div>
    </>
  );
};

export default Post;
