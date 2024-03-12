import React from "react";
import parse from "html-react-parser";

const Post = (post) => {
  console.log(post.post.title);

  return (
    <article>
      <h2>{post.post.title === undefined ? null : post.post.title}</h2>
      <div className="post-content">
        {post.post.content === undefined ? null : parse(post.post.content)}
      </div>
    </article>
  );
};

export default Post;
