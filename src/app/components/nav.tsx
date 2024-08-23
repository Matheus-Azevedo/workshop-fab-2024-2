import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container_nav}>
      <button>
        <Link className={styles.link} href="/page/home">
          Home
        </Link>
      </button>
      <button>
        <Link className={styles.link} href="/page/character">
          Find Character
        </Link>
      </button>
    </nav>
  );
}
