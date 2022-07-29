import { Navbar } from '../components/Navbar';
import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={bgWrap}>
        <Image
          alt=""
          src="/bg.png"
          layout="fill"
          quality={100}
        />
      </div>
    </div>
  );
}
