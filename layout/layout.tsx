import Head from 'next/head';
import { ReactChildren } from 'react';
import { NavBar } from './nav-bar';
import { Footer } from './footer';

export const Layout = (props: { children: ReactChildren }) => {
  return (
    <div className='container'>
      <Head>
        <title>Lur Terapia Naturalak</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <NavBar />
      <main className='main'>{props.children}</main>
      <Footer/>
    </div>
  );
};

