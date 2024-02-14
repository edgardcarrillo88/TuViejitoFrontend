'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Videoplayer from "../components/videoplayer/page"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from 'next-auth/react'
import axios from "axios";

const usuario = "Edgard Carrillo"

export default function Home() {

  const { data: session } = useSession()
  // console.log(session);
  // console.log(session?.user?.name);
  // console.log(session?.user?.email );

  const videos = [
    'https://player.vimeo.com/external/469843585.sd.mp4?s=a6d38defb63ef4dee15f09abf704d8f090db9343&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/372230628.sd.mp4?s=ab547d39b6760b9d0343261b921d792b72c28f41&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/464599049.sd.mp4?s=a98404fd6123fc0a97ac0511689da893556fee00&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/371928798.sd.mp4?s=fbbce67871454648d1592292a260b10f35946956&profile_id=164&oauth2_token_id=57447761',
  ];

  const usuarios = [
    { precio: 80, usuario: "usuario 1", name: "Jhon Celso Quispe Taype", ubicacion: "Centro de Lima", descripcionbreve: "Me espcializo tambien en el cuidado de bebes" },
    { precio: 90, usuario: "usuario 2", name: "Tito Josue Quispe Chuan", ubicacion: "Breña", descripcionbreve: "Soy muy responsable y te sigo a todas partes" },
    { precio: 110, usuario: "usuario 3", name: "Henry Gabriel Macedo Delgado", ubicacion: "Los Olivos", descripcionbreve: "Parezco serio, pero tengo mi chispa" },
    { precio: 70, usuario: "usuario 4", name: "John Albert Flores Vilca", ubicacion: "Surco", descripcionbreve: "Soy responsable, pero ultimamente estoy mostrando mi lado maligno" },
    { precio: 80, usuario: "usuario 5", name: "Johan Manuel Callomamani Buendia", ubicacion: "Jesus Maria", descripcionbreve: "Soy muy bueno enseñandoles python a los viejitos" },
    { precio: 100, usuario: "usuario 6", name: "Jean Boris Espinoza Vicente", ubicacion: "San Martin de Porres", descripcionbreve: "Los entretengo contando chistes negros" },
    { precio: 120, usuario: "usuario 7", name: "Dayana Deisy Miranda Flores", ubicacion: "Santa Anita", descripcionbreve: "A veces trato mal a las personas, pero es por su bien" }
  ]


  const [carer, setCarer] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/getusersfiltered`);
      setCarer(response.data)
      // console.log(response.data);
    }
    fetchData()
  }, [])



  const router = useRouter()

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex => prevIndex + 1);
  };

  const handleClick = (id) => {
    router.push(`/service/${id}`)
  }

  const [visible, setVisible] = useState("none")

  const handleVisible = () => {
    setVisible("flex")
  }

  const [options, setOptions] = useState(
    {
      Usuario: session?.user?.email || "",
      Direccion: "",
      PersonaAtendida: "",
      Comentarios: "",
      FechaHora: "",
      Tiempo: "",
      Limitantes: [],
      Cuidador: ""
    }
  )

  const HandleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    })
    console.log(options);
  }

  const HandleCheckBox = async (e) => {
    const { value } = e.target;
    let updatedInspecciones = [...options.Limitantes];
    if (e.target.checked) {
      updatedInspecciones.push(value);
    } else {
      updatedInspecciones = updatedInspecciones.filter(item => item !== value);
    }
    setOptions({
      ...options,
      Limitantes: updatedInspecciones
    });
    console.log(options);
  }

  const handleSubmit = async (cuidador) => {

    console.log(cuidador);

    setOptions({
      ...options,
      Cuidador: cuidador,
    })

    const serializeList = (list) => {
      return list.length > 0 ? JSON.stringify(list) : JSON.stringify([]);
    };

    const formData = new FormData();

    formData.append('initaldata', JSON.stringify(options));
    formData.append('Limitantes', serializeList(options.Limitantes));
    console.log(formData);

    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }

    console.log(formDataObject);


    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/data/registerservice`, options)
      console.log(response);
      router.push("/service/done")
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  }



  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <p>Hola: {session?.user?.name} </p>
          <div className={styles.container}>
            <p>Esta es tu dirección:</p>
            <input name="Direccion" onChange={HandleChange}></input>
          </div>
          <div className={styles.container}>
            <p>La persona a atender es:</p>
            <input name="PersonaAtendida" onChange={HandleChange}></input>
          </div>
          <div className={styles.container}>
            <p>Puntos a considerar:</p>
            <textarea name="Comentarios" onChange={HandleChange}></textarea>
          </div>
          <div className={styles.container}>
            <p>Fecha de atención</p>
            <input type="datetime-local" name="FechaHora" onChange={HandleChange} />
          </div>
          <div className={styles.container}>
            <p>Horas requeridas</p>
            <input type="number" name="Tiempo" onChange={HandleChange} />
          </div>
          <div className={styles.container}>
            <p>La persona tiene las siguientes limitantes:</p>
            <div className={styles.checkboxlist}>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Sordera" name='limitantes' onChange={HandleCheckBox} />
                <p>Sordera</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Ceguera" name='limitantes' onChange={HandleCheckBox} />
                <p>Ceguera</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Alzheimer" name='limitantes' onChange={HandleCheckBox} />
                <p>Alzheimer</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Parkinson" name='limitantes' onChange={HandleCheckBox} />
                <p>Parkinson</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Sindrome de Down" name='limitantes' onChange={HandleCheckBox} />
                <p>Sindrome de Down</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" value="Diabetes" name='limitantes' onChange={HandleCheckBox} />
                <p>Diabetes</p>
              </div>
            </div>
          </div>
          {/* <button className={styles.button} onClick={() => handleClick(usuario)}>Solicitar un servicio</button> */}
          <button className={styles.button} onClick={handleVisible}>Solicitar un servicio</button>
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

      <div className={styles.cuidadoresform}>

        {
          carer.map((item) => (
            <div className={styles.cuidadorescontainer} style={{ display: visible }} key={item._id}>
              <div className={styles.maininformation}>
                <p>{item.Nombres} {item.Apellidos}</p>
                <p>{item.Direccion}</p>
                <p>S/{item.Precio}</p>
              </div>
              <div className={styles.description}>
                <p>{item.Comentario}</p>
                <button className={styles.button} onClick={() => handleSubmit(item.usuario)} >Solicitar</button>
              </div>
            </div>
          ))
        }

      </div>
    </>
  );
}


