import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
// import Toggle from "@/component/DarkMode/Toggle"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Mehran
                </Link>
                <div className={styles.links}>
                    {/* <Toggle /> */}
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className={styles.link}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
            <hr className={styles.hr} />
        </>
    );
};

export default Navbar;
