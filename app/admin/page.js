"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'

export default function Login() {

  const usuarios = [
    { precio: 80, usuario: "usuario 1", name: "Jhon Celso Quispe Taype", ubicacion: "Centro de Lima", descripcionbreve: "Me espcializo tambien en el cuidado de bebes" },
    { precio: 90, usuario: "usuario 2", name: "Tito Josue Quispe Chuan", ubicacion: "Breña", descripcionbreve: "Soy muy responsable y te sigo a todas partes" },
    { precio: 110, usuario: "usuario 3", name: "Henry Gabriel Macedo Delgado", ubicacion: "Los Olivos", descripcionbreve: "Parezco serio, pero tengo mi chispa" },
    { precio: 70, usuario: "usuario 4", name: "John Albert Flores Vilca", ubicacion: "Surco", descripcionbreve: "Soy responsable, pero ultimamente estoy mostrando mi lado maligno" },
    { precio: 80, usuario: "usuario 5", name: "Johan Manuel Callomamani Buendia", ubicacion: "Jesus Maria", descripcionbreve: "Soy muy bueno enseñandoles python a los viejitos" },
    { precio: 100, usuario: "usuario 6", name: "Jean Boris Espinoza Vicente", ubicacion: "San Martin de Porres", descripcionbreve: "Los entretengo contando chistes negros" },
    { precio: 120, usuario: "usuario 7", name: "Dayana Deisy Miranda Flores", ubicacion: "Santa Anita", descripcionbreve: "A veces trato mal a las personas, pero es por su bien" }
  ]

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/getuserdata`);
      setData(response.data)
      console.log(response.data);
      setIsLoading(false)
    }
    fetchData()
  }, [])


  const logo = '/Imagen1.png'

  const router = useRouter();

  const handleDelete = async (_id) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/deleteuser`,{_id});
      console.log(response.data);
    } catch (error) {
      console.error("Detalle del error", error);
    }
  };


  return (
    <>
      <div className={styles.main}>

        {!isLoading && (
          <div className={styles.cuidadoresform}>
            {
              data.map((item) => (
                <div className={styles.cuidadorescontainer} key={item._id}>
                  <div className={styles.maininformation}>
                    <p>{item.Nombres} {item.Apellidos} - {item.Tipo}</p>
                    <p>{item.Direccion}</p>
                    <p>S/{item.Precio}</p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.Comentario}</p>
                    <button className={styles.button} onClick={() => handleDelete(item._id)} >Eliminar</button>
                  </div>
                </div>
              ))
            }
          </div>
        )}

        {isLoading &&
          <div className={styles.loader}>
            <div className={styles.body}>
              <div className={styles.baymax}></div>
            </div>
            <p>Cargando...</p>
          </div>
        }

      </div>
    </>
  );
}
