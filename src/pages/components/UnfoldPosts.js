import React from "react";
import Post from "./Post";
import OutOfPages from "./OutOfPages";

export default function UnfoldPosts({ posts, fromNum, toNum }) {
  // let fromNum = 0;
  // let toNum = 5;
  let firstFive;

  try {
    firstFive = posts.slice(fromNum, toNum);
  } catch (error) {
    console.log(error);
  }

  // if (posts !== undefined) {
  // }

  console.log(firstFive);

  return (
    <div>
      {posts &&
        firstFive &&
        firstFive.map((postx, i) => <Post key={i} post={postx} />)}
      {posts && firstFive && firstFive.length === 0 && <OutOfPages />}
    </div>
  );
}
