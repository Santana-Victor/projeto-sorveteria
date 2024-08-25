import styles from './Rodape.module.css';
import Image from 'next/image';
import Logo from '/public/logo.png';
import Link from 'next/link';

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src={Logo} alt="Logo Gelateria" width={100} height={100} />
        <div className={styles.container_texto}>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={styles.container_texto}>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className={styles.container_texto}>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <p className={styles.copyright}>
        Gelateria. Desenvolvido por{' '}
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/victor-augusto-santana-lopes-9821a0236"
          target="_blank"
        >
          Victor Santana
        </Link>
      </p>
    </footer>
  );
}
