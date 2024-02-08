'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Videoplayer from "../../components/videoplayer/page"
import { useState } from "react";
import { useRouter } from "next/navigation";




export default function Home({ params }) {

  const videos = [
    'https://player.vimeo.com/external/469843585.sd.mp4?s=a6d38defb63ef4dee15f09abf704d8f090db9343&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/372230628.sd.mp4?s=ab547d39b6760b9d0343261b921d792b72c28f41&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/464599049.sd.mp4?s=a98404fd6123fc0a97ac0511689da893556fee00&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/371928798.sd.mp4?s=fbbce67871454648d1592292a260b10f35946956&profile_id=164&oauth2_token_id=57447761',
  ];


  const usuarios = [
    { precio: 80, name: "Jhon Celso Quispe Taype", ubicacion: "Centro de Lima", descripcionbreve: "Me espcializo tambien en el cuidado de bebes" },
    { precio: 90, name: "Tito Josue Quispe Chuan", ubicacion: "Breña", descripcionbreve: "Soy muy responsable y te sigo a todas partes" },
    { precio: 110, name: "Henry Gabriel Macedo Delgado", ubicacion: "Los Olivos", descripcionbreve: "Parezco serio, pero tengo mi chispa" },
    { precio: 70, name: "John Albert Flores Vilca", ubicacion: "Surco", descripcionbreve: "Soy responsable, pero ultimamente estoy mostrando mi lado maligno" },
    { precio: 80, name: "Johan Manuel Callomamani Buendia", ubicacion: "Jesus Maria", descripcionbreve: "Soy muy bueno enseñandoles python a los viejitos" },
    { precio: 100, name: "Jean Boris Espinoza Vicente", ubicacion: "San Martin de Porres", descripcionbreve: "Los entretengo contando chistes negros" },
    { precio: 120, name: "Dayana Deisy Miranda Flores", ubicacion: "Santa Anita", descripcionbreve: "A veces trato mal a las personas, pero es por su bien" }
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex => prevIndex + 1);
  };

  const router = useRouter();

  const handleChange = (e) => {
    router.push("/service/done")
  };
  
  

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>

          {
            usuarios.map((item) => (
              <div className={styles.container} key={item.name}>
                <div className={styles.maininformation}>
                  <p>{item.name}</p>
                  <p>{item.ubicacion}</p>
                  <p>S/{item.precio}</p>
                </div>
                <div className={styles.description}>
                  <p>{item.descripcionbreve}</p>
                  <button className={styles.button} onClick={handleChange}>Solicitar</button>
                </div>
              </div>
            ))
          }

        </div>

        <div className={styles.video}>
          {currentVideoIndex < videos.length && (
            <Videoplayer
              key={currentVideoIndex}
              src={videos[currentVideoIndex]}
              nextVideo={handleNextVideo}
            />
          )}
        </div>

      </div>
    </>
  );
}
