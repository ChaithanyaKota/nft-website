import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-300 h-screen w-full z-0">
      <Head>
        <title>hahaha</title>
        <meta
          name="description"
          content="World's Finest Chibi Collection"
        />
        <link rel="icon" href="/Chiisai.png" />
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Logo */}

      {/* Paragraph */}
      {/* Music Player */}
    </div>
  );
}
