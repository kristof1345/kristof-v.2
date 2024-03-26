import Link from "next/link";

export default function Contact() {
  return (
    <>
      <main id="contact">
        <section id="hero">
          <h1>Contact</h1>
        </section>
        <section id="content">
          <p>
            Hey, my name is Kristof Nemeth. Here, I&apos;m mostly writing about
            Copywriting, Marketing, Persuaion and all the things that fascinate
            me.
          </p>
          <p>
            I&apos;m also writing a &#42;daily&#42; email newsletter about these
            same topics, so if you want to get these articles striaght delivered
            to your inbox, <Link href="/">go here.</Link>
          </p>
        </section>
        <section className="contact">
          <p>And if you want to get in touch with me, write me an email:</p>
          <Link href="mailto:kristofnemeth1345@gmail.com">
            kristofnemeth1345@gmail.com
          </Link>
        </section>
      </main>
    </>
  );
}
