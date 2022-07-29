import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import { logoWrap } from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-violet-400 p-3'>
        <Link href='/'>
          <div className={logoWrap}>
          <Image
          alt=""
          src="/UC.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          />
        </div>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-violet-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:m-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/about' activeClassName="active">
              <a  className='font lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-violet-600 hover:text-white'>
                About
              </a>
            </Link>
            <Link href='/prizes'>
              <a className='font lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-violet-600 hover:text-white'>
                Prizes
              </a>
            </Link>
            <Link href='/mint'>
              <a className='font lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-violet-600 hover:text-white'>
                Mint
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .font {
          font-size: 24px;
        },
        .active {
          background-color: #7c3aed;
          transition: 1s;
          border: 2px solid;
        }
      `}</style>
    </>
  );
};
