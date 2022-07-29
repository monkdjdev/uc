import { Navbar } from '../components/Navbar';
import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'

export default function Prizes() {
  return (
    <div>
      <Navbar />
      <div className={bgWrap}>
        <Image
          alt=""
          src="/bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
