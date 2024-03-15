import Link from "next/link";

export default function Home() {
  return (
    <>
      <main id="home">
        <section id="headline">
          <p>FREE book reveals...</p>
          <h1>5 Copywriting Lessons From The Masters Of Persuasion</h1>
        </section>

        <section id="home-content">
          <p>
            A short book assembled from the teachings of 5 masters of persuasion
            ranging from the all times best negotiators to copywriters... Each
            teaching you a quick lesson you can immediately use to become more
            persuasive and influential.
          </p>
          <p>Here&apos;s what inside:</p>
          <div className="bullet-list">
            <p className="bold">
              * The 6 Billion Dollar Copywriter Who Made A Rookie Mistake…
            </p>
            <p>
              * Nobody Wants Your Whacky Product? Here&apos;s How To Make It
              Sell.
            </p>
            <p className="bold">
              * Internet Pioneer&apos;s Blueprint For Headlines
            </p>
            <p>
              * How To Sell A Hostile Prospect Who Cusses At You And Wishes You
              To Hell
            </p>
            <p className="bold">
              * The Dangers Of Not Wearing A Seatbelt… And How It Can Help You
              Convince People
            </p>
          </div>
          <p>
            Now, you can get it for FREE, all you have to do is simply put your
            primary emial address into the form below.
          </p>
          <p>
            After that, the book will be immediately sent to you via email
            without charge.
          </p>
          <p>Just your email, please:</p>
          <div className="home-sub-holder">
            <iframe
              src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
              data-test-id="beehiiv-embed"
              height={52}
              frameBorder={0}
              scrolling="no"
              style={{
                margin: "5px 0 0 0",
                width: "100%",
                borderRadius: "0px !important",
                backgroundColor: "transparent",
              }}
            />
            <span>I respect your privacy. Unsubscribe any time.</span>
          </div>
          <div className="redirect-to-blog">
            <Link href={`/blog?page=1`}>No, Thanks.</Link>
            <Link href={`/blog?page=1`}>
              I would like to go to the website and read the free copywriting,
              marketing and persuaion tips there
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
