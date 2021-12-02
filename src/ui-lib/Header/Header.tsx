import React from "react";
import styles from "./Header.module.css";
import { NavItem } from "./NavItem";

interface HeaderProps {
  title: string;
  routes: { label: string; path: string }[];
}
export const Header = (props: HeaderProps) => {
  const { title, routes } = props;

  return (
    <header className={styles.container}>
      <h3>{title}</h3>
      <nav className={styles.nav}>
        {routes.map((route) => (
          <NavItem key={route.path} label={route.label} path={route.path} />
        ))}
      </nav>
    </header>
  );
};