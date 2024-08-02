import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div
      className="header"
      //   style={{
      //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-pattern-intro-desktop.svg),
      //   linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%))
      // `,
      //     backgroundRepeat: "no-repeat",
      //     backgroundPosition: "center",
      //     height: "100vh",
      //   }}
    >
      <Navigation />
    </div>
  );
}
export default Header;
