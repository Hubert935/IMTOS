import React from "react";
import styles from "./Spacer.module.css";

interface SpacerProps {
  size?: number;
}
export const Spacer = (props: SpacerProps) => {
  const { size } = props;

  return (
    <div
      className={styles.spacer}
      style={
        size
          ? {
              width: `${size}px`,
              height: `${size}px`,
              flexGrow: !!size ? 0 : 1,
            }
          : undefined
      }
    />
  );
};