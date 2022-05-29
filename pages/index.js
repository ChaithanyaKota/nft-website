import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Paragraph from '../components/Paragraph';
import MusicPlayer from '../components/MusicPlayer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Chiisai</title>
        <meta name="description" content="Chiisai" />
        <link rel="icon" href="/Chiisai.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* <Paragraph /> */}
      <MusicPlayer />
    </div>
  );
}
