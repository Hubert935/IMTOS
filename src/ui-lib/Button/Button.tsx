import React from "react";
import styles from "./Button.module.css"

interface ButtonProps {
  label: string;
  loading?: boolean;
  width?: number;
  onClick: () => void;
}
export const Button = (props: ButtonProps) => {
  const { label, loading, width, onClick: _onClick } = props;

  const text = !loading ? label : `${label}...`;
  const style = width ? { width: `${width}px` } : undefined;
  const onClick = !loading ? _onClick : undefined;

  return (
    <div
      role="button"
      className={styles.container}
      style={style}
      onClick={onClick}
    >
      <span className={styles.text}>{text}</span>
    </div>
  );
};