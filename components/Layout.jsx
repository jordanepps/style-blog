import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Style Blog</title>
      </Head>
      <div className="mx-auto max-w-7xl px-3">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
