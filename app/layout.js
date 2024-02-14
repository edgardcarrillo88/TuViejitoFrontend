import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/page'
import Footer from './components/footer/page'
import Statecart from './components/statecart/page'
import styles from './page.module.css'
import Shoppingcart from './components/shoppingcart/page'
import { Providers } from '../Providers'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tu Viejito",
  description: "Atención y amor para nuestros mayores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.main}>
          <Statecart>
            <Shoppingcart/>
            <Providers>
            <Navbar />
            <main >{children}</main>
            <Footer />
            </Providers>
          </Statecart>
        </div>
      </body>
    </html>
  );
}