import React from "react";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

export default function Post({ post }) {
  console.log(post);
  return (
    <article>
      {/* <h2>{post.title === undefined ? null : post.title}</h2> */}
      <PostTitle>{post ? post : undefined}</PostTitle>
      <div className="post-content">
        <PostBody>{post?.content}</PostBody>
        {/* {post.content === undefined ? null : parse(post.content)} */}
      </div>
    </article>
  );
}
