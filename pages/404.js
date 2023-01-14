import styles from "./404.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Page Not Found!</h1>
      <h2 className={styles.h2}>404</h2>
    </div>
  );
}
