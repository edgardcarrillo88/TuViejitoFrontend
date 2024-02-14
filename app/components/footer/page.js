import styles from './page.module.css'
import Link from 'next/link'
import Listoption from '../listoption/page'

export default function page(params) {

    const logo = '/Imagen1.png'

    return (
        <>
            <div className={styles.main}>
                <img className={styles.logo} src={logo} />
                <div className={styles.options}>
                    <Listoption/>
                    {/* <Link className={styles.linkoption} href="/home">Inicio</Link>
                    <Link className={styles.linkoption} href="/about">Nosotros</Link>
                    <Link className={styles.linkoption} href="/register">Conviertete en cuidador</Link>
                    <Link className={styles.linkoption} href="/carer">Modo cuidador</Link>
                    <Link className={styles.linkoption} href="/admin">Administrador</Link> */}
                </div>
                <div className={styles.fotterRigth}>
                    <div>
                        Marca registrada
                    </div>
                </div>
            </div>
        </>
    )

};
