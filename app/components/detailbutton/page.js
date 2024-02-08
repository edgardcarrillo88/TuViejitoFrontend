'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function DetailButton({ items }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (index) => {
        if (index === selectedOption) {
            // Si el usuario hace clic nuevamente en la opción seleccionada, deselecciónala
            setSelectedOption(null);
        } else {
            // Deseleccionar la opción anterior y seleccionar la nueva
            setSelectedOption(index);
        }
    };

    return (
        // <div className={styles.main}>
        //     {items.map((item, index) => (
        //         <p
        //             key={index}
        //             className={styles.button}
        //             style={{
        //                 border: index === selectedOption ? "1px solid rgb(37, 99, 235)" : "1px solid rgba(197, 192, 192, 0.705)"
        //             }}
        //             onClick={() => handleClick(index)}
        //         >
        //             {item.detail}
        //         </p>
        //     ))}
        // </div>
        <>
        <h1>Hola</h1>
        </>
    );
}

