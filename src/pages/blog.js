// import { useEffect, useState } from "react";
// import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import UnfoldPosts from "./components/UnfoldPosts";

// `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?number=2&page=${page}`

export default function Blog({ allPosts }) {
  const router = useRouter();
  const { page } = router.query;

  console.log(allPosts);

  let allActualPosts = allPosts.data.posts;

  if (allActualPosts === undefined || allActualPosts.length < 0) {
    allActualPosts = "";
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (page === "0") {
    window.location.href = "http://localhost:3000/blog?page=1";
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
          <Link href={`/blog?page=${page === undefined ? 1 : +page - 1}`}>
            Previous page
          </Link>
          <Link href={`/blog?page=${page === undefined ? 2 : +page + 1}`}>
            Next page
          </Link>
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
