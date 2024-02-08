import styles from "./page.module.css";


export default function Home() {


  return (
    <>
      <div className={styles.main}>

        <div className={styles.container}>
          <div className={styles.description}>
            <p>¡Conéctate con una comunidad dedicada a brindar cuidado amoroso a nuestros mayores!</p>
          </div>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=300" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=300" />
          </div>
          <div className={styles.description}>
            <p>En nuestra plataforma, encontrarás apoyo mutuo y una red de cuidadores confiables para la tranquilidad de tu familia.</p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.description}>
            <p>Somos el puente entre quienes necesitan cuidado y aquellos dispuestos a ofrecerlo con cariño.</p>
          </div>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=300" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/1474705/pexels-photo-1474705.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <div className={styles.description}>
            <p>Bienvenido a un espacio donde la compasión y la atención se unen para cuidar a nuestros mayores.</p>
          </div>
        </div>

      </div>
    </>
  );
}


