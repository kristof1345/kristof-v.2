import React from "react";
import parse from "html-react-parser";

const Post = (post) => {
  console.log(post.post.title);

  return (
    <article>
      <h2>{post.post.title}</h2>
      <div className="post-content">{parse(post.post.content)}</div>
    </article>
  );
};

export default Post;
