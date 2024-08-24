import styles from './page.module.css';
import Image from 'next/image';
import Logo from '/public/logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container_topo}>
          <Image src={Logo} alt="Logo Gelateria" width={100} height={100} />
          <nav>
            <ul className={styles.container_links}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/sabores">
                  Sabores
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/sobre">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <h1>Página Inicial</h1>
      </main>
    </>
  );
}
