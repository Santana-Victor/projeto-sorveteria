import Image from 'next/image';
import Sabores from '/public/banner-sabores.jpg';
import styles from './HomeSecaoSabores.module.css';

export default function HomeSecaoSabores() {
  return (
    <section className={styles.secao}>
      <Image className={styles.imagem} src={Sabores} alt="Nossos sabores" />
      <div className={styles.container_texto}>
        <h2>Nossos sabores</h2>
        <span>Novos e deliciosos!</span>
        <p>
          Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
          Gelateria todos os nossos produtos são naturais, à base de frutas e
          sem nenhum conservante! Também temos opções sem lactose e sem açúcar.
          Venha conhecer e perceber que tem como o sorvete ser delicioso e
          saudável ao mesmo tempo!
        </p>
      </div>
    </section>
  );
}
