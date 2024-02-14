'use client'
import Link from "next/link";
import styles from './page.module.css'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from "react";
import axios from "axios";
import Listoption from '../listoption/page'


export default function page(params) {

    const { data: session } = useSession()
    const logo = '/Imagen1.png'

    const [data, setData] = useState([])
    const [visible, setVisible] = useState("none")

    useEffect(() => {
        if (session?.user?.email) { // Verificar si session.user.email tiene un valor
          async function fetchData() {
            try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/getsingleuser`,{
                params: { email: session.user.email }
              });
              setData(response.data);
              setVisible("flex")
            } catch (error) {
              console.error('Error al obtener datos del usuario:', error);
              // Manejar el error si es necesario
            }
          }
          fetchData();
        }
      }, [session]); 


    return (
        <>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img style={{ height: "50px", width: "50px" }} src={logo} />
                </div>
                <div className={styles.options}>
                    <img style={{ height: "50px", width: "50px" }} src={logo} />
                    <Listoption/>
                    {/* <Link className={styles.linkoption} href="/home">Inicio</Link>
                    <Link className={styles.linkoption} href="/about">Nosotros</Link>
                    <Link className={styles.linkoption} href="/register">Conviertete en cuidador</Link>
                    <Link className={styles.linkoption} href="/carer">Modo Cuidador</Link>
                    <Link className={styles.linkoption} href="/admin" style={{ display: visible }}>Administrador</Link> */}
                </div>
                {session?.user ? (
                    <div className={styles.logoutoption}>
                        <Link className={styles.linkoption} href="/login" onClick={() => signOut()}>
                            <img src={session.user.image} />
                        </Link>
                    </div>
                ) : (
                    <div className={styles.loginoption}>
                        <Link className={styles.linkoption} href="/login">Login</Link>
                    </div>
                )
                }
            </div>
        </>
    )
};
