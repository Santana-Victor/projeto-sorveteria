import './globals.css';
import Topo from '@/componentes/Topo';

export const metadata = {
  title: 'Gelateria',
  description: 'Gelateria - os melhores sabores de sorvete você só aqui!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
