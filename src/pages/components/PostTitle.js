import React from "react";
import Link from "next/link";

const PostTitle = ({ children }) => {
  console.log(children);

  return (
    <Link target="_blank" href={`${children.URL}`}>
      <h2
        className="post-title"
        dangerouslySetInnerHTML={{ __html: children?.title }}
      />
    </Link>
  );
};

export default PostTitle;
