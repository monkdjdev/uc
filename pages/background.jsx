import Image from 'next/image'
import { bgWrap } from '../styles/Home.module.css'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="Mountains"
        src="/about.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background
