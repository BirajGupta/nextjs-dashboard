import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello Admin</h1>
        <p className={styles.text}>
          Eu reprehenderit amet et nulla consectetur occaecat officia cillum
          exercitation aliquip. Excepteur ut sunt exercitation commodo tempor.
          Adipisicing cupidatat exercitation incididunt sint ad do aute in velit
          ea ipsum. Adipisicing nulla voluptate deserunt adipisicing voluptate
          eiusmod. Eu mollit duis enim enim velit. Esse ea cupidatat quis
          deserunt sint eiusmod duis dolor cupidatat veniam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See users</a>
        </Link>
      </div>
    </>
  );
}
