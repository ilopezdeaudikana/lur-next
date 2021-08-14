import Head from 'next/head';
import Link from 'next/link';
import { ReactChildren } from 'react';

export const Layout = (props: { children: ReactChildren }) => {
  return (
    <div className='container'>
      <Head>
        <title>Lur Terapia Naturalak</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/nosotros'>
        <a>Nosotros</a>
      </Link>
      <Link href='/formacion'>
        <a>Formación</a>
      </Link>
      <Link href='/medicina-china'>
        <a>Medicina China</a>
      </Link>
      <Link href='/osteopatia'>
        <a>Osteopatía</a>
      </Link>
      <Link href='/acupuntura'>
        <a>Acupuntura</a>
      </Link>
      <Link href='/alimentacion'>
        <a>Alimentacion energética</a>
      </Link>
      <Link href='/terapia-sacrocraneal'>
        <a>Terapia Sacrocraneal</a>
      </Link>
      <Link href='/vendaje'>
        <a>Vendaje Neuromuscular</a>
      </Link>
      <Link href='/masaje-deportivo'>
        <a>Masaje Deportivo</a>
      </Link>
      <Link href='/masaje-movilizacion-articular'>
        <a>Masaje movilización articular</a>
      </Link>
      <Link href='/rodillo'>
        <a>Rodillo Caliente</a>
      </Link>
      <main className='main'>{props.children}</main>
      <footer className='footer'></footer>
    </div>
  );
};
// <NavBar navButtons={navButtons} />
// <Header appTitle={appTitle} />
