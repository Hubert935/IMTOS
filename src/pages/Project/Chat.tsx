import React from 'react'
import { useState, useEffect } from "react";
import styles from "./Chat.module.css"

const Chat = () => {
    interface ToppersData {
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
        if(counter % 2){
            arr.push({ msg: term, position: "right" })
            var c = counter + 1;
            setCounter(c)
        }else{
            arr.push({ msg: term, position: "left" })
            var c = counter + 1;
            setCounter(c)
        }
        setChatMessage(arr);
        console.log(chatMessage);
        setTerm("")
    }

    return (
        <div className="container">
            <div >
                
                    {chatMessage.map((chatMessage) => (
                        
                        <div style={{textAlign: "{{chatMessage.position}}"}}>
                        <p >{chatMessage.msg}</p>
                        </div>
                    ))}
                
            </div>
            <form onSubmit={submitForm}>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Type your message..."
                    className="input"
                />
                <button type="submit" className="btn">Submit</button>
            </form>

        </div>
    )
}

export default Chat

