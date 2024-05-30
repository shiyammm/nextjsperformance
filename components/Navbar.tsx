import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-7 flex-center w-full fixed top-0 z-50 border-b-2 border-black-200 text-white ">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="./jsm-logo.svg" width={55} height={40} alt="logo" />
        </Link>

        <Image
          src="./hamburger-menu.svg"
          width={30}
          height={30}
          alt="menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/">Nextjs 14</Link>
          </li>
          <li className="body-text font-normal">
            <Link href="/">MasterClass</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
