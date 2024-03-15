import React from "react";
import Meta from "./Meta";

export default function Layout() {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
