
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
        <a href="/witty">
          <img
            className="logo"
            src="/witty/lightlogos/wittysmall.png"
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
          src="/witty/lightlogos/wittybig.png"
          alt="Header Logo"
        />

        <p>
       This version of Witty is now dead. Thank you for keeping up with the development of Witty.
<br /><small>sorry if I spooked you, for full context, the witty team has split up and &quot;witty&quot; is now dead. however, you can check out it&apos;s successor, litty.</small>
        </p>
      </body>
<footer style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div>
    <i>
      <small>witty (death) 9.9.9<br /><i>made with hate from the witty team :(</i><br /><a href="/">witty</a> is no longer licensed under{' '}
      <a
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        style={{ display: 'inline-block' }}
      >
        CC BY-NC-ND 4.0</a></small>
    </i>
  </div>
  <iframe src="https://wittystatus.betteruptime.com/badge?theme=dark" width="250" height="30" frameBorder="0" scrolling="no"></iframe>
</footer>

    </html>
  );
};

export default Home;
