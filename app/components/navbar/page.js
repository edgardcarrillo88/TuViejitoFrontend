'use client'
import Link from "next/link";
import styles from './page.module.css'
import { signIn, useSession, signOut } from 'next-auth/react'

export default function page(params) {

    const { data: session } = useSession()

    const logo = '/Imagen1.png'


    return (
        <>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img style={{ height: "50px", width: "50px" }} src={logo} />
                </div>
                <div className={styles.options}>
                    <img style={{ height: "50px", width: "50px" }} src={logo} />
                    <Link className={styles.linkoption} href="/home">Inicio</Link>
                    <Link className={styles.linkoption} href="/about">Nosotros</Link>
                    <Link className={styles.linkoption} href="/register">Conviertete en cuidador</Link>
                </div>
                <div className={styles.searchbar}>
                    <div>&#128269;</div>
                    <input placeholder="busca tu viejito" />
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
