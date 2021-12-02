import classnames from "classnames";
import React from "react";
import styles from "./EmojiPicker.module.css";

interface EmojiPickerProps {
  items: {
    id: string;
    emoji: string;
  }[];
  value: string;
  onChange: (value: string) => void;
}
export const EmojiPicker = (props: EmojiPickerProps) => {
  const { items, value, onChange } = props;

  return (
    <>
      <div className={styles.container}>
        {items.map((item) => (
          <EmojiPickerItem
            key={item.id}
            item={item}
            selected={item.id === value}
            onClick={() => onChange(item.id)}
          />
        ))}
      </div>
    </>
  );
};

interface EmojiPickerItemProps {
  item: {
    id: string;
    emoji: string;
  };
  selected?: boolean;
  onClick: () => void;
}
const EmojiPickerItem = (props: EmojiPickerItemProps) => {
  const { item, selected, onClick } = props;

  return (
    <div
      role="button"
      className={classnames(styles.pickerItem, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      <span>{item.emoji}</span>
    </div>
  );
};