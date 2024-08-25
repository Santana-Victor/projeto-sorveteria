import styles from './Sabores.module.css';
import Image from 'next/image';
import Oreo from '/public/sabor-oreo.jpg';
import Pistache from '/public/sabor-pistache.png';
import CookiesAvela from '/public/sabor-cookies-avela.png';
import Kiwi from '/public/sorbet-kiwi.png';
import Morango from '/public/sorbet-morango.png';
import LimaoSiciliano from '/public/sorbet-limao.png';

export default function Sabores() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_banner}>
        <h1 className="titulo">NOSSOS SABORES</h1>
      </section>
      <section className={styles.secao_sabores}>
        <h2>SABORES DE SORVETE</h2>
        <div className={styles.container_cards}>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={Oreo}
              alt="Sorvete de Oreo"
            />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={Pistache}
              alt="Sorvete Pistache"
            />
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={CookiesAvela}
              alt="Sorvete Cookies & Avelã"
            />
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={Kiwi}
              alt="Sorvete de Kiwi"
            />
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={Morango}
              alt="Sorvete de Morango"
            />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.imagem_card}
              src={LimaoSiciliano}
              alt="Sorvete de Limão Siciliano"
            />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
