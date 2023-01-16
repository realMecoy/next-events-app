import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <ul>
            <li>
              <a href="#">123 456 7890</a>
            </li>
            <li>
              <a href="mailto:realmecoy@gmail.com">brendon@webdevmecoy.co.za</a>
            </li>
            <li>
              <a href="https://webdevmecoy.co.za">WebDev by: The Real Mecoy</a>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <Link href="/">Next Events</Link>
        </div>
        <div className={styles.copyright}>
          <span>&copy; {date} Next JS Course</span>
        </div>
      </div>
    </footer>
  );
}
