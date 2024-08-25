import Image from 'next/image';
import SobreNos from '/public/sobre-image.jpg';
import styles from './HomeSecaoSobre.module.css';

export default function HomeSecaoSobre() {
  return (
    <section className={styles.secao}>
      <Image className={styles.imagem} src={SobreNos} alt="Sobre nós" />
      <div className={styles.container_texto}>
        <h2>SOBRE NÓS</h2>
        <span>Alegria em cada casquinha!</span>
        <p>
          Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
          há anos no mercado produzindo o que tem de melhor para o nosso cliente
          e você não pode ficar fora dessa. Venha nos fazer uma visita e
          aproveite o melhor atendimento e o melhor sorvete da cidade.
        </p>
      </div>
    </section>
  );
}
