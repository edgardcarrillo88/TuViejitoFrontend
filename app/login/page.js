"use client";
import Link from "next/link";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'

export default function Login() {


  const logo = '/Imagen1.png'

  const router = useRouter();

  const handleChange = (e) => {
    router.push("/home")
  };
  

  return (
    <>
      <div className={styles.main}>
        <form className={styles.form}>
          <img src={logo} alt='Logo' width={90} height={100} />
          <div className={styles.messages}>
            <p >Estas a un paso de brindar calidad de vida</p>
          </div>
          <button className={styles.button} onClick={() => signIn()}>
            <div className={styles.logo}>
              <div className={styles.gline}></div>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
              <span className={styles.blue}></span>
            </div>
            <p >Ingresa con Google</p>
          </button>
        </form>
      </div>
    </>
  );
}
