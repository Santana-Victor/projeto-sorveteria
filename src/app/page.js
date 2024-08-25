import styles from './page.module.css';
import HomeSecaoSabores from '@/componentes/HomeSecaoSabores';
import HomeSecaoEventos from '@/componentes/HomeSecaoEventos';
import HomeSecaoSobre from '@/componentes/HomeSecaoSobre';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.secao_banner}>
          <h1 className="titulo">SORVETE ARTESANAL</h1>
        </section>
        <HomeSecaoSabores />
        <HomeSecaoEventos />
        <HomeSecaoSobre />
      </main>
    </>
  );
}
