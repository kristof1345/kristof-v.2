import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";

export default function Home() {
  const [postObject, setPostObject] = useState([]);
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1/sites/nonfictium.wordpress.com/posts?number=2&page=${page}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data.posts);
        setPostObject(response.data.posts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <main id="home">
        <section id="home-sub-sec-top">
          <h1>My name is Kristof. Take a look:</h1>
          <p>
            I write a daily email newsletter about copywriting, direct marketing
            and whatever is on my mind at the moment. It's free, plus you get a
            gift from me personaly once you join. Don't be shy, smack that
            button:
          </p>
          <div className="home-sub-holder">
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
          {console.log(postObject)}
          {postObject.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </section>
        <div>
          <button onClick={() => setPage(page + 1)}>Next page</button>
          <button onClick={() => setPage(page - 1)}>Previous page</button>
        </div>
      </main>
    </>
  );
}
