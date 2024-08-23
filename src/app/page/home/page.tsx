"use client";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/components/nav";

export interface DataPersonagem {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;
}

function Home() {
  const [data, setData] = useState<DataPersonagem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      const data = await response.json();
      const dataFiltered = data.results.filter(
        (item: DataPersonagem) => item.image.length > 0
      );
      // console.log(JSON.stringify(dataFiltered, null, 2));
      console.log(dataFiltered);
      setData(dataFiltered);
    }
    fetchData();
  }, []);

  return (
    <main>
      <div className={styles.container_01}>
        <Nav />
      </div>
      <div className={styles.container_02}>
        {data &&
          data.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Home;
