import React from "react";
import styles from "./IconButton.module.css"
interface iconProps{
    emoji : string;
    loading?: boolean;
    onClick: () => void;
    color: string;
    
}

export const IconButton = (props: iconProps)=>{
    const {emoji,loading, onClick: _onClick, color} = props;
    const onClick = !loading ? _onClick : undefined;
    return( 
    <div className={styles.button} onClick={onClick} style={{background:color}}>
        <p className={styles.emoji}>{emoji}</p>
    </div>)
}