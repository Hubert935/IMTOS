import React from 'react'
import { useState, useEffect } from "react";
import styles from "./Chat.module.css"

const Chat = () => {
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
        if(counter % 2){
            arr.push({ key: counter, msg: term, position: "right" })
            var c = counter + 1;
            setCounter(c)
        }else{
            arr.push({ key: counter, msg: term, position: "left" })
            var c = counter + 1;
            setCounter(c)
        }
        setChatMessage(arr);
        console.log(chatMessage);
        setTerm("")
    }

    const create = (message: string, pos: string) =>{
        const tempPos = pos;

        if(pos==="right"){
            return (
                <div style={{textAlign: "right"}}>
                    <div>
                    <p>{message}</p>
                    </div>
                </div>
            )
        }else{
            return (
                <div style={{textAlign: "left"}}>
                    <div>
                    <p>{message}</p>
                    </div>
                </div>
            )
        }
    
    }

    return (
        <div style={{width:"100%", textAlign:"center"}}>
        <div style={{width:"75%"}}>
            <div >
                
                    {chatMessage.map((chatMessage) => (
                        create(chatMessage.msg, chatMessage.position)
                        
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
        </div>
    )
}

export default Chat


