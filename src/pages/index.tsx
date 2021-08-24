import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BlackbirdPlane from '../components/BlackbirdPlane';
import Implementation from '../components/Implementation';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="##e92741" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>

        <link rel="icon" type="image/png" href="logo.png" />

        <meta charSet="utf-8" />
        <title>blackbird</title>

        <meta
          name="keywords"
          content="blackbird, black, bird, coding, theme, vscode, Matt Gleich, matt gleich, gleich, Black Bird"
        />
        <meta
          content="A sharp color scheme for computer programming"
          name="description"
        />
        <meta content="Matt Gleich" name="author" />
      </Head>

      {/* Planes */}
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={`${styles.planes}`}>
            <div className={styles.tiltLeft}>
              <div className={styles.leftPlane}>
                <BlackbirdPlane />
              </div>
            </div>
            <div
              className={`${styles.middlePlane} animate__delay-3s animate__animated animate__fadeInDown`}
            >
              <BlackbirdPlane />
            </div>
            <div className={styles.rightPlane}>
              <BlackbirdPlane />
            </div>
          </div>
          <div
            className={`${styles.hello} animate__delay-5s animate__animated animate__fadeInUp`}
          >
            <h1>
              Say hello to <span className={styles.blackbird}>blackbird</span>
            </h1>
            <div className={styles.subtitle}>
              <h2>
                The <span className={styles.sharpest}>sharpest</span> color
                theme around
              </h2>
              <a href="https://github.com/blackbirdtheme" target="_blank">
                <img
                  className={styles.githubLogo}
                  src="https://unpkg.com/simple-icons@v5/icons/github.svg"
                  alt="blackbird's GitHub page"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Showing colors */}
        <div>
          <h1 className={styles.section}>Meet the family</h1>
          <img className={styles.colors} src="colors.svg" alt="colors" />
        </div>

        {/* Showing implementation */}
        <div className={styles.impl}>
          <h1 className={styles.section}>
            Wow, <i>look at that</i>
          </h1>
          <img
            className={styles.implImage}
            src="examples/vscode-midnight.png"
            alt="impl image"
          />
          <p>Visual Studio Code with the blackbird theme (midnight variant)</p>
          <img
            className={styles.implImage}
            src="examples/vscode-dusk.png"
            alt="impl image"
          />
          <p>Visual Studio Code with the blackbird theme (dusk variant)</p>
        </div>

        {/* Implementation picture grid */}
        <h1 className={styles.section}>For all your favorite stuff</h1>
        <div className={styles.implementations}>
          <Implementation
            iconName="vim"
            alt="Vim"
            linkURL="https://github.com/blackbirdtheme/vim"
          />
          <Implementation
            iconName="alacritty"
            alt="Alacritty"
            linkURL="https://github.com/blackbirdtheme/terminals/tree/main/alacritty"
          />
          <Implementation
            iconName="visualstudiocode"
            alt="Visual Studio Code"
            linkURL="https://github.com/blackbirdtheme/vscode"
          />
          <Implementation
            iconName="windowsterminal"
            alt="Windows Terminal"
            linkURL="https://github.com/blackbirdtheme/terminals/tree/main/windows_terminal"
          />
        </div>

        <footer>
          ©{' '}
          <a href="https://github.com/gleich" target="_blank">
            Matt Gleich
          </a>{' '}
          {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
