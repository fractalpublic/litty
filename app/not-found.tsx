
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
        <script src="myscript.js" type="text/javascript" async></script>
      </head>
      <body>
        <a href="/">
          <img
            className="logo"
            src="/wittysmall.png"
            alt="Topbar Logo"
          />
        </a>

        <br />
        <h1 className="h99">404</h1>
        <h1>it seems you&apos;re in the wrong place!</h1>
        <p>
          <small>let&apos;s get you back on track</small>
          <br />
          <a href="/">back to home</a>
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
