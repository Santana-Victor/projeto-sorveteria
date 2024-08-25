import Image from 'next/image';
import Eventos from '/public/eventos-image.jpg';
import styles from './HomeSecaoEventos.module.css';

export default function HomeSecaoEventos() {
  return (
    <section className={styles.secao}>
      <Image className={styles.imagem} src={Eventos} alt="Nossos eventos" />
      <div className={styles.container_texto}>
        <h2>NOSSOS EVENTOS</h2>
        <span>Delicias com sorvete!</span>
        <p>
          Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
          prontinhos para te atender e oferecer os melhores eventos com os
          melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
          aqui com a gente.
        </p>
      </div>
    </section>
  );
}
