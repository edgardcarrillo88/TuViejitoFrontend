'use client'
import { useRouter } from "next/navigation";
import styles from './page.module.css'

export default function page(params) {


    const router = useRouter();

    const handleChange = (e) => {
        router.push("/home")
    };

    return (
        <>
            <div className={styles.main}>
                <img src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=300" />
                <h1>Reserva Realizada</h1>
                <button className={styles.button} onClick={handleChange}>Regresar</button>
            </div>
        </>
    )

};


