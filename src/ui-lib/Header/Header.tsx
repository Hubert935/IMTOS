import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}
export const Header = (props: HeaderProps) => {
  const {title} = props;

  return (
    <header className={styles.container}>
      <h3>{title}</h3>
    </header>
  );
};