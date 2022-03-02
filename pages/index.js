import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chiisai</title>
        <meta
          name="description"
          content="World's Finest Chibi Collection"
        />
        <link rel="icon" href="/Chiisai.png" />
      </Head>
    </div>
  );
}
