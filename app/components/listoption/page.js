'use client'
import Link from "next/link";
import styles from './page.module.css'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from "react";
import axios from "axios";


export default function page(params) {

    const { data: session } = useSession()

    const [visible, setVisible] = useState("none")

    useEffect(() => {
        if (session?.user?.email) { // Verificar si session.user.email tiene un valor
            async function fetchData() {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/getsingleuser`, {
                        params: { email: session.user.email }
                    });
                    setVisible("flex")
                } catch (error) {
                    console.error('Error al obtener datos del usuario:', error);
                }
            }
            fetchData();
        }
    }, [session]);


    return (
        <>
            <Link className={styles.linkoption} href="/home">Inicio</Link>
            <Link className={styles.linkoption} href="/about">Nosotros</Link>
            <Link className={styles.linkoption} href="/register">Conviertete en cuidador</Link>
            <Link className={styles.linkoption} href="/carer">Modo Cuidador</Link>
            <Link className={styles.linkoption} href="/admin" style={{ display: visible }}>Administrador</Link>
        </>
    )
};
