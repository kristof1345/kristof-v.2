import React from "react";

const PostBody = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

export default PostBody;
