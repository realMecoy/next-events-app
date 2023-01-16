import Link from "next/link";
import styles from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else if (props.Link) {
    return (
      <Link className={styles.btn} href={props.Link}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}
