import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex mx-auto mt-2 pb-4 justify-between items-center font-display ">
      <p className="text-3xl font-display tracking-widest">
        <Link href="/">The Style Blog</Link>
      </p>
      <div className="flex gap-6 lg:gap-16 text-lg tracking-widest font-normal">
        <p>
          <Link href="/">Posts</Link>
        </p>
        <p>
          <Link href="/">About</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
