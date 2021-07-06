import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BlackbirdPlane from '../components/BlackbirdPlane';
import Implementation from '../components/Implementation';

export default function Home() {
  return (
    <div>
      <Head>
        <title>blackbird</title>
      </Head>

      {/* Planes */}
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={`${styles.planes}`}>
            <div
              className={`${styles.leftPlane} animate__delay-1s animate__animated animate__fadeInDown`}
            >
              <BlackbirdPlane />
            </div>
            <div
              className={`${styles.middlePlane} animate__delay-2s animate__animated animate__fadeInDown`}
            >
              <BlackbirdPlane />
            </div>
            <div
              className={`${styles.rightPlane} animate__delay-3s animate__animated animate__fadeInDown`}
            >
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
            src="example.png"
            alt="impl image"
          />
          <p>Visual Studio Code with the blackbird theme</p>
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
