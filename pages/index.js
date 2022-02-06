import Head from "next/head";
import Hello from "../components/Hello";
import SocialMedia from "../components/SocialMedia";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomás Altrui</title>
        <meta name="description" content="Tomás' web." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Hello />
        <div className={styles.name}>Soy Tomás</div>

        <p className={styles.desc}>
          Aún estoy construyendo la página, igual podes contactarme en estos lugares:
        </p>

        <SocialMedia />
      </div>
      <footer className={styles.footer}>
        <span>
          Made with <span title="a computer">🖥️</span> by me
        </span>
      </footer>
    </div>
  );
}
