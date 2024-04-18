import Link from "next/link";

export default function Home() {
  return (
    <>
      <main id="home">
        <section id="headline">
          <p>FREE book reveals...</p>
          <h1>Old-Timer Copywriting Secrets</h1>
          <h2>
            7 Principles Used By Star Salesmans, Master Negotiators And A-List
            Copywriters
          </h2>
        </section>

        <section id="home-content">
          <p>
            Each chapter will teach you a quick lesson you can immediately apply
            and use to make yourself a more persuasive and influential
            copywriter.
          </p>
          <p>Here&apos;s what you get:</p>
          <div className="bullet-list">
            <p className="bold">
              * The rookie mistake of a 6 billion dollar copywriter that made
              his campaign a complete flop…
            </p>
            <p>* How to *really* sell a product</p>
            <p className="bold">
              * Internet pioneer&apos;s blueprint for headlines
            </p>
            <p>* How to sell a man who hates your guts</p>
            <p className="bold">
              * Strange secret used by the worlds most feared negotiator to let
              people persuade themselves
            </p>
            <p>* 87 year old copywriting secrets</p>
            <p className="bold">
              * Why one of the best copywriters who ever lived REFUSED to accept
              money for the sales letters he wrote
            </p>
            <p>
              * How to evoke the strongest(and hardest to use) emotions in your
              prospect
            </p>
          </div>
          <p>
            You can get this book for FREE. All you have to do is simply put
            your primary emial address into the form below.
          </p>
          <p>
            After that, the book will be immediately sent to you via email,
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
            <Link href={`/blog`}>No, Thanks.</Link>
            <Link href={`/blog`}>
              I would like to go to the website and read the free copywriting,
              marketing and persuaion tips there
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
