import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>blackbird</title>
      </Head>
      <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </div>
  );
}
