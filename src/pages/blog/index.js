import React from "react";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import UnfoldPosts from "../components/UnfoldPosts";

export default function Blog({ allPosts }) {
  let allActualPosts = allPosts.data.posts;

  if (allActualPosts === undefined || allActualPosts.length < 0) {
    allActualPosts = "";
  }

  return (
    <>
      <main id="blog">
        <section id="blog-sub-sec-top">
          <h1>My name is Kristof. Take a look:</h1>
          <p>
            I write a daily email newsletter about copywriting, direct marketing
            and whatever is on my mind at the moment. It&apos;s free, plus you
            get a gift from me personaly once you join. Don&apos;t be shy, smack
            that button:
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
          <Link className="pagination-button" href={`/blog/page/2`}>
            {" "}
            Next Page{" "}
          </Link>

          {/* <Link
            style={fromNum <= 0 ? { pointerEvents: "none" } : {}}
            href={`/blog?page=${+realPageValue - 1}`}
          >
            Previous Page
          </Link>
          <Link href={`/blog?page=${+realPageValue + 1}`}>Next Page</Link> */}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data for the specific post
  const allPosts = await getPosts();

  return {
    props: { allPosts },
    revalidate: 10,
  };
}
