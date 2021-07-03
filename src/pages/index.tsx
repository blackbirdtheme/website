import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BlackbirdPlane from '../components/BlackbirdPlane';

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
            <h2>
              The <span className={styles.sharpest}>sharpest</span> color theme
              around
            </h2>
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
      </main>
    </div>
  );
}
