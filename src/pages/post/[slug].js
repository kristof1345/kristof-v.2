import React from "react";
import { useRouter } from "next/router";
import { getPosts } from "@/lib/api";
import PostBody from "../components/PostBody";

export default function PostSlug({ allPosts }) {
  const router = useRouter();
  const { slug } = router.query;
  let neededPost;

  let allActualPosts = allPosts?.data.posts;

  if (allActualPosts === undefined || allActualPosts.length < 0) {
    allActualPosts = "";
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (allActualPosts.length > 0) {
    allActualPosts.map((post) => {
      if (post.slug === slug) {
        neededPost = post;
      }
    });
  }

  return (
    <div id="singular-post">
      <h2
        className="post-title"
        dangerouslySetInnerHTML={{ __html: neededPost?.title }}
      />
      <PostBody>{neededPost?.content}</PostBody>
      <div className="blog-sub-holder">
        <h3>
          Just Type In Your Primary Email Address To Get My Daily Tips And A
          FREE Book Gift
        </h3>
        <iframe
          src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
          data-test-id="beehiiv-embed"
          height={52}
          frameBorder={0}
          scrolling="no"
          style={{
            margin: "27px 0 0 0",
            borderRadius: "0px !important",
            backgroundColor: "transparent",
          }}
        />
        <div>I respect your privacy. Unsubscribe any time.</div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getPosts();

  return {
    props: { allPosts },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getPosts();

  return {
    paths: allPosts.data.posts.map((post) => `/post/${post.slug}`) || [],
    fallback: true,
  };
};
