import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUsername = localStorage.getItem("username");
    setIsAuthenticated(!!token);
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername(null);
  };

  const navLinks = [
    { name: "Premium", link: "#" },
    { name: "Support", link: "#" },
    { name: "Download", link: "#" },
    { name: "Playlists", link: "/playlist", show: isAuthenticated },
    { name: "Sign up", link: "/signup", show: !isAuthenticated },
    { name: "Log in", link: "/login", show: !isAuthenticated },
    { name: "Log out", link: "/", show: isAuthenticated, onClick: handleLogout },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.navbar_container}>
        <Link href="/" passHref>
          <img src="/logo1.png" alt="Logo" className={styles.nav_logo} />
        </Link>

        <div className={styles.nav_links}>
          {navLinks.map(
            (link, index) =>
              link.show !== false && (
                <Link key={index} href={link.link} passHref>
                  <span className={styles.links} onClick={link.onClick}>
                    {link.name}
                  </span>
                </Link>
              )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
