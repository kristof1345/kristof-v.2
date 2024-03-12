import React from "react";
import parse from "html-react-parser";

export default function Post(post) {
  if (post.post.title === undefined) {
    post.post.title = "";
  }

  return (
    <article>
      <h2>{post.post.title === undefined ? null : post.post.title}</h2>
      <div className="post-content">
        {post.post.content === undefined ? null : parse(post.post.content)}
      </div>
    </article>
  );
}
