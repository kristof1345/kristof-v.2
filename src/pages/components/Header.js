import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div id="header">
      <div className="site-branding">
        <div className="site-title">
          <Link href="/blog">Kristof Nemeth</Link>
        </div>
        <div className="site-summary">
          I write about Direct Response, Copywriting and Psychology.
        </div>
      </div>
      <div className="navigation">
        <div className="nav-main">
          {/* <span> */}
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {/* </span> */}
        </div>
      </div>
    </div>
  );
}
