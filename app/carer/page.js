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
        <h1>carer</h1>
        <h1>carer</h1>
        <h1>carer</h1>
        <h1>carer</h1>
        <h1>carer</h1>
      </div>
    </>
  );
}
