import React from "react";
import styles from "./CloseButton.module.css"
interface iconProps{
    emoji : string;
    loading?: boolean;
    onClick: () => void;
    
}

export const CloseButton = (props: iconProps)=>{
    const {emoji,loading, onClick: _onClick} = props;
    const onClick = !loading ? _onClick : undefined;
    return( 
    <div className={styles.button} onClick={onClick}>
        <p className={styles.emoji}>{emoji}</p>
    </div>)
}