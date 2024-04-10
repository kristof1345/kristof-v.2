import React from "react";
import Link from "next/link";

const PostTitle = ({ children }) => {
  console.log(children.slug);
  return (
    <Link href={`/post/${children.slug}`}>
      <h2
        className="post-title"
        dangerouslySetInnerHTML={{ __html: children.title }}
      />
    </Link>
  );
};

export default PostTitle;
