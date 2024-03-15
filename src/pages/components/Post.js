import React from "react";
import PostTitle from "./PostTitle";

export default function Post({ post }) {
  console.log(post);

  return (
    <article>
      {/* <h2>{post.title === undefined ? null : post.title}</h2> */}
      <PostTitle>{post?.title}</PostTitle>
      <div className="post-content">
        {/* {post.content === undefined ? null : parse(post.content)} */}
      </div>
    </article>
  );
}
