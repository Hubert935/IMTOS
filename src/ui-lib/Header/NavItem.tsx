import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

interface NavItemProps {
  label: string;
  path: string;
}
export const NavItem = (props: NavItemProps) => {
  const { label, path } = props;

  return (
    <NavLink to={path} activeClassName={styles.selected}>
      <div className={styles.container}>
        <span className={styles.text}>{label}</span>
      </div>
    </NavLink>
  );
};