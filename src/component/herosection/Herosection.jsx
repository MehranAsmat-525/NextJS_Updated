import Image from "next/image";
import styles from "./hero.module.css";
import Hero from "public/hero.png";
import Link from "next/link";
// import Button from "@/components/Button/Button";

export default function Home({ Img, Content, Desc }) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>{Content}</h1>
                <p className={styles.desc}>{Desc}</p>
                <Link
                    href="https://web.dev/client-side-rendering-of-html-and-interactivity/"
                    target="_blank"
                >
                    <button className={styles.btn}>Read</button>
                </Link>
            </div>
            <div className={styles.item}>
                <Image
                    src={Img}
                    width="300"
                    height={200}
                    className={styles.img}
                />
            </div>
        </div>
    );
}
