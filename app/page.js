import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <p className={styles.message}>Bienvenido a nuestro hogar de cuidado y afecto, Encuentra el compañero perfecto para ti</p>
        </div>
        <div className={styles.imagescontainer}>
          <div className={styles.images}>
            <img src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <img src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <img src="https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <img src="https://images.pexels.com/photos/1474705/pexels-photo-1474705.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </div>
      </div>
    </>
  );
}
