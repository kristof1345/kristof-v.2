import React from "react";
import axios from "axios";
import UnfoldPosts from "@/pages/components/UnfoldPosts";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  console.log(params);
  const pageNumber = params.number; // This will be '1', '2', '3', ...
  const res = await axios.get(
    `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?page=${pageNumber}`
  );
  const data = res.data;

  return {
    props: {
      data: data,
      pageNumber: pageNumber,
    },
  };
}

export default function PageSlug({ data, pageNumber }) {
  const router = useRouter();
  const { number } = router.query;

  let allActualPosts = data.posts;

  if (allActualPosts === undefined || allActualPosts.length < 0) {
    allActualPosts = "";
  }

  return (
    <main id="blog">
      <section id="blog-sub-sec-top">
        <h1>My name is Kristof. Take a look:</h1>
        <p>
          I write a daily email newsletter about copywriting, direct marketing
          and whatever is on my mind at the moment. It&apos;s free, plus you get
          a gift from me personaly once you join. Don&apos;t be shy, smack that
          button:
        </p>
        <div className="blog-sub-holder">
          <iframe
            src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
            data-test-id="beehiiv-embed"
            height={52}
            frameBorder={0}
            scrolling="no"
            style={{
              margin: "27px 0 0 0",
              width: "100%",
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </section>
      <section id="main-page-content">
        {allActualPosts.length > 0 && <UnfoldPosts posts={allActualPosts} />}
      </section>
      <div id="blog-pagination">
        <Link
          className="pagination-button"
          style={
            +number <= 1 ? { pointerEvents: "none", color: "#555555" } : {}
          }
          href={`/blog/page/${+number - 1}`}
        >
          {" "}
          Previous Page{" "}
        </Link>
        <Link className="pagination-button" href={`/blog/page/${+number + 1}`}>
          {" "}
          Next Page{" "}
        </Link>
      </div>
    </main>
  );
}
