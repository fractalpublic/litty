// pages/index.tsx

import { ReactNode } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        {/* Assuming Astro is defined somewhere */}
        {/* <meta name="generator" content={Astro.generator} /> */}
        <title>Witty.dev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script src="myscript.js" type="text/javascript" async></script>
      </head>
      <body>
        <a href="/">
          <Image
            className="logo"
            src="https://black_hole-3kf-1-y4232899.deta.app/api/photo/hlqpn906wbqj.png"
            height={300}
            width={300} // Adjust width as needed
            alt="Logo"
          />
        </a>

        <br />
        <Image
          style={{
            minWidth: '70px',
            maxWidth: '700px',
            width: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src="https://black_hole-3kf-1-y4232899.deta.app/api/photo/9v1yhtaxrxn9.png"
          alt="Image description"
          height={400} // Adjust height as needed
          width={800} // Adjust width as needed
        />

        <p>
          <small>explore our world</small>
          <br />
          <a href="/recent">browse wittys</a>
        </p>
        <hr />
        <p>
          <small>boring stuff</small>
          <br />
          <a href="/login">login (beta)</a>
          <br />
          <a href="/credits">credits</a>
        </p>
      </body>
      <footer style={{ textAlign: 'center' }}>
        <p>
          <a href="https://wittydev.repl.co">Witty</a> by{' '}
          <a href="https://www.youtube.com/@driftwooddev">Driftwood</a> is licensed under{' '}
          <a
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{ display: 'inline-block' }}
          >
            CC BY-NC-ND 4.0
            <img
              style={{ height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom' }}
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            />
            <img
              style={{ height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom' }}
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            />
            <img
              style={{ height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom' }}
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            />
            <img
              style={{ height: '22px!important', marginLeft: '3px', verticalAlign: 'text-bottom' }}
              src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
            />
          </a>
        </p>
        <i>
          <p>made with love and hate from the witty team</p>
        </i>
      </footer>
    </html>
  );
};

export default Home;
