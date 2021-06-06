import Head from "next/head";
import styles from "../styles/Home.module.css";
import BlackbirdPlane from "../components/BlackbirdPlane";

export default function Home() {
  return (
    <div>
      <Head>
        <title>blackbird</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={`${styles.planes}`}>
            <div className="animate__delay-1s animate__animated animate__fadeInDown">
              <BlackbirdPlane />
            </div>
            <div
              className={`${styles.middlePlane} animate__delay-2s animate__animated animate__fadeInDown`}
            >
              <BlackbirdPlane />
            </div>
            <div className="animate__delay-3s animate__animated animate__fadeInDown">
              <BlackbirdPlane />
            </div>
          </div>
          <h1
            className={`${styles.hello} animate__delay-5s animate__animated animate__fadeInUp`}
          >
            Say hello to <span className={styles.blackbird}>blackbird</span>
          </h1>
          <div className={styles.spacer} />
        </div>
        <div>
          <h1 style={{ marginBottom: "10px" }}>Meet the family</h1>
          <img className={styles.colors} src="colors.svg" alt="colors" />
        </div>
      </main>
    </div>
  );
}
