'use client'
import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";


export default function Home() {

  const [data, setData] = useState({
    Nombres: "",
    Apellidos: "",
    Direccion: "",
    Fecha: "",
    DNI: "",
    Celular: "",
    Comentario: "",
    Precio: "",
    Tipo: "Cuidador"
  })

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data);
  }

  const HandleSubmit = async () => {

    const allFieldsFilled = Object.values(data).every(field => field.trim() !== '');

    if (allFieldsFilled) {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/registeruser`, data);
        console.log(response);
        alert("Datos enviados")
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }

    } else {
      alert("llenar todos los campos")
    }
  }


  return (
    <>
      <div className={styles.main}>

        <div className={styles.form}>
          <p>Inicia tu registro!</p>


          <div className={styles.container}>
            <p>Nombres:</p>
            <input onChange={HandleChange} name="Nombres"></input>
          </div>
          <div className={styles.container}>
            <p>Apellidos:</p>
            <input onChange={HandleChange} name="Apellidos"></input>
          </div>


          <div className={styles.container}>
            <p>Tu dirección:</p>
            <input onChange={HandleChange} name="Direccion"></input>
          </div>


          <div className={styles.container}>
            <p>Fecha de Nacimiento:</p>
            <input onChange={HandleChange} name="Fecha" type="date"></input>
          </div>


          <div className={styles.container}>
            <p>DNI/CE:</p>
            <input onChange={HandleChange} name="DNI" type="number"></input>
          </div>


          <div className={styles.container}>
            <p>Celular:</p>
            <input onChange={HandleChange} name="Celular" type="number"></input>
          </div>

          <div className={styles.container}>
            <p>Cuentales a los demás acerca de ti:</p>
            <textarea onChange={HandleChange} name="Comentario"></textarea>
          </div>

          <div className={styles.container}>
            <p>Precio por hora</p>
            <input onChange={HandleChange} name="Precio" type="number"></input>
          </div>


          <button className={styles.button} onClick={HandleSubmit}>Registrarse</button>
        </div>

      </div>
    </>
  );
}


