import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 h-screen w-full z-0">
      <Head>
        <title>Chiisai</title>
        <meta name="description" content="Chiisai" />
        <link rel="icon" href="/Chiisai.ico" />
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Logo */}
      <span className="flex flex-col top-56 relative w-full px-8 z-10">
        <Image
          src="/ChiisaiBig.svg"
          alt="Social Media Image"
          width={1918}
          height={401}
          className="shadow-xl"
        />
      </span>

      {/* Paragraph */}
      <p>PLAY SOME MUSIC.</p>
      <p> EXPLORE THE COLLECTION.</p>
      <p>BECOME A PART OF THE JOURNEY.</p>

      {/* Music Player */}
    </div>
  );
}
