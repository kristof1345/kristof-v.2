import React from "react";

const PostTitle = ({ children }) => {
  return (
    <h2 className="post-title" dangerouslySetInnerHTML={{ __html: children }} />
  );
};

export default PostTitle;
