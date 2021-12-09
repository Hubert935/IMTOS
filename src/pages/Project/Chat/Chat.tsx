import React from 'react'
import { useState } from "react";
import styles from "./Chat.module.css"

export const Chat = () => {
    interface ToppersData {
        key: number;
        msg: string;
        position: string;
    }
    const [chatMessage, setChatMessage] = useState<ToppersData[]>([]);
    const [term, setTerm] = useState('');
    const [counter, setCounter] = useState(2);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something 
        var arr: ToppersData[];
        arr = chatMessage;
        if (counter % 2) {
            arr.push({ key: counter, msg: term, position: "right" })
            var c = counter + 1;
            setCounter(c)
        } else {
            arr.push({ key: counter, msg: term, position: "left" })
            c = counter + 1;
            setCounter(c)
        }
        setChatMessage(arr);
        console.log(chatMessage);
        setTerm("")
    }

    const clearArray = () => {
        var arr: ToppersData[];
        arr = [];
        setChatMessage(arr);
    }

    const create = (message: string, pos: string) => {
        if (pos === "right") {
            return (
                <>
                    <br />
                    <div className={styles.messageRight}>
                        <p className={styles.nameRight}>Anna</p>
                        <div className={styles.bubbleRight}>
                            <p className={styles.chatText}>{message}</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <br />
                    <div className={styles.messageLeft}>
                        <p className={styles.nameLeft}>Pelle</p>
                        <div className={styles.bubbleLeft}>
                            <p className={styles.chatText}>{message}</p>
                        </div>
                    </div>
                </>
            )
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.chatSquare}>
                <div className={styles.chatBackground}>
                    <button className={styles.clearButton} onClick={clearArray}>Clear</button>

                    {chatMessage.map((chatMessage) => (
                        create(chatMessage.msg, chatMessage.position)

                    ))}
                </div>
            </div>
            <div style={{ marginTop: "4px", marginLeft: "13%", width: "75%" }}>
                <form onSubmit={submitForm}>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        placeholder="Aa"
                        className={styles.textInput}
                        required
                    />
                    <button type="submit" className={styles.chatButton}>Send</button>
                </form>
            </div>
        </div>
    )
}


