'use client'
import Link from "next/link";
import styles from './page.module.css'
import { useAppContext } from '../statecart/page'


export default function page(params) {

    const options = useAppContext()
    const logo = '/Imagen1.png'

    function handleOpenCart() {
        if (options.isOpen === true) {
            options.CloseCart()
        } else {
            options.openCart()
        }
    }

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
                <div className={styles.login}>
                    <Link className={styles.linkoption} href="/login">Login</Link>
                </div>
            </div>
        </>
    )
};
