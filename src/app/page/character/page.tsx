"use client";

import Nav from "@/app/components/nav";
import styles from "./character.module.css";
import { useState } from "react";
import axios from "axios";
import Input from "@/app/components/input";
import { DataPersonagem } from "../home/page";

export default function Character() {
  const [id, setId] = useState(0);
  const [character, setCharacter] = useState<DataPersonagem>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setId(Number(event.target.value));
  }

  async function handleSubmit() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(data);
  }

  return (
    <main>
      <div className={styles.container_01}>
        <Nav />
      </div>
      <div className={styles.container_02}>
        <Input
          type="number"
          name="id"
          placeholder="Character ID"
          value={id}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        {character && (
          <div className={styles.card}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.location.name}</p>
            <p>{character.location.url}</p>
          </div>
        )}
      </div>
    </main>
  );
}
