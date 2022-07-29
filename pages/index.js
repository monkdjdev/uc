import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className={bgWrap}>
        <Image
          alt=""
          src="/about.png"
          layout="fill"
          quality={100}
        />
      </div>
    </div>
  );
}

