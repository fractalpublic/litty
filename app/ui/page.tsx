import { ReactNode } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const UI: React.FC = () => {
  return (
    <>
      <Head>
        <title>Witty</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        <link href="/witty/globals.css" rel="stylesheet" />
        <script src="myscript.js" type="text/javascript" async></script>
      </Head>
      <body>
        <header style={{ textAlign: 'center', margin: '1rem 0' }}>
          <Link href="/witty">
            <a>
              <Image
                className="logo"
                src="/witty/lightlogos/wittysmall.png"
                alt="Topbar Logo"
                width={100}
                height={50}
              />
            </a>
          </Link>
          <Image
            src="/witty/lightlogos/wittybig.png"
            alt="Header Logo"
            width={200}
            height={100}
            layout="responsive"
          />
          <p>
            <small>explore our world</small>
            <br />
            <Link href="/witty/recent">browse wittys</Link>
          </p>
        </header>
        <hr />
        <nav>
          <p>
            <small>boring stuff</small>
            <br />
            <Link href="/witty/login">login (beta)</Link>
            <br />
            <Link href="/witty/credits">credits</Link>
          </p>
        </nav>
        <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div>
            <small>
              witty (flame) 0.2.0<br />
              <i>made with love from the witty team ♥</i><br />
              <Link href="/">witty</Link> is licensed under{' '}
              <a
                href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
                target="_blank"
                rel="license noopener noreferrer"
              >
                CC BY-NC-ND 4.0
              </a>
            </small>
          </div>
          <iframe
            src="https://wittystatus.betteruptime.com/badge?theme=dark"
            width="250"
            height="30"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </footer>
      </body>
    </>
  );
};

export default UI;
