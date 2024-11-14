import React from "react";
import Link from "next/link";
import Auth from "./Auth";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/create">Créer un Post</Link>
          </li>
        </ul>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
