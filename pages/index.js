import Head from "next/head";
import Navbar from "../components/Navbar";

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

      {/* Paragraph */}

      {/* Music Player */}
    </div>
  );
}
