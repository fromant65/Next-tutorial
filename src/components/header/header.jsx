import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="topNav">
        <nav>
          <img src="" alt="" />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </div>
      <h1>Events page</h1>
    </header>
  );
};

export default Header;
