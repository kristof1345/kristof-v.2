import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div id="header">
      <div className="site-branding">
        <div className="site-title">
          <Link href="/">Kristof Nemeth</Link>
        </div>
        <div className="site-summary">
          I write about Direct Response, Copywriting and Psychology.
        </div>
      </div>
      <div className="navigation">
        <div className="nav-main">
          {/* <span> */}
          <Link href="#">Newsletter</Link>
          <Link href="#">Archive</Link>
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
