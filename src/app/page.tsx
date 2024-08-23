"use client";

import Input from "./components/input";
import styles from "./page.module.css";
import { useState } from "react";
import { z } from "zod";

export default function Login() {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const schema = z.object({
      usuario: z.string().email(),
      senha: z.string().min(5),
    });

    try {
      schema.parse(formData);
      window.location.href = "/page/home";
    } catch (error) {
      console.log(error);
      alert("Dados inválidos, preencha corretamente!");
    }
  }

  return (
    <main className={styles.background}>
      <div className={styles.container_login}>
        <div className={styles.container_logo}>
          <h1>Fábrica Workshop</h1>
          <div className={styles.logo}></div>
        </div>
        <form action="">
          <Input
            type="text"
            name="usuario"
            placeholder="Usuário"
            value={formData.usuario}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
