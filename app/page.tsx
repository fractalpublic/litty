
import { ReactNode } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <title>Witty</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
          <link
          href="/witty/globals.css"
          rel="stylesheet"
        />
        <script src="myscript.js" type="text/javascript" async></script>
      </head>
      <body>
        <a href="/">
          <img
            className="logo"
            src="/witty/wittysmall.png"
            alt="Topbar Logo"
          />
        </a>

        <br />
        <img
          style={{
            minWidth: '70px',
            maxWidth: '700px',
            width: '100%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src="/witty/wittybig.png"
          alt="Header Logo"
        />

        <p>
          <small>explore our world</small>
          <br />
          <a href="/witty/recent">browse wittys</a>
        </p>
        <hr />
        <p>
          <small>boring stuff</small>
          <br />
          <a href="/witty/login">login (beta)</a>
          <br />
          <a href="/witty/credits">credits</a>
        </p>
      </body>
      <footer style={{ textAlign: 'center' }}>
        
        <i>
          <small>witty (flame) 0.2.0<br /><i>made with love from the witty team ♥</i><br /><a href="/">witty</a> is licensed under{' '}
          <a
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{ display: 'inline-block' }}
          >
            CC BY-NC-ND 4.0</a></small>
        </i>
      </footer>
    </html>
  );
};

export default Home;
