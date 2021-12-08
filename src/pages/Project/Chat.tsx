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
                <>
                <br/>
                <div style={{textAlign: "right",  width:"100%"}}>
                    <p style={{marginRight:"17px", fontSize:"12px"}}>Anna</p>
                    <div style={{background:"green", width:"90%",  borderRadius:"10px", marginLeft:"42px"}}>
                    <p style={{marginRight:"10px"}}>{message}</p>
                    </div> 
                </div>
                </>
            )
        }else{
            return (
                <>
                <br />
                <div style={{textAlign: "left", width:"100%"}}>
                     <p style={{marginLeft:"14px", fontSize:"12px"}}>Pelle</p>
                    <div style={{ background:"grey", width:"90%",  borderRadius:"10px", marginLeft:"10px"}}>
                        <p style={{marginLeft:"10px"}}>{message}</p>
                    </div>
                </div>
                </>
            )
        }
    
    }

    return (
        <div style={{width:"100%", textAlign:"center", height:"25vh"}}>
        <div style={{width:"75%", marginLeft:"12%"}}>
            <div style={{width:"100%", 
            height:"500px", overflow:"auto", background:"beige",
             borderRadius:"20px", 
                        }} >
                
                    {chatMessage.map((chatMessage) => (
                        create(chatMessage.msg, chatMessage.position)
                        
                    ))}
                
            </div>
            

        </div>
        <div style={{position:"absolute", marginTop:"10px", marginLeft:"13%"}}>
            <form onSubmit={submitForm}>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Type your message..."
                    className="input"
                />
                <button type="submit" className="btn"
                style={{
                    background:"blue", borderRadius:"10px", width:"80px", border:"none", 
                    height:"23px", boxShadow:"1px 1px 5px 2px rgba(0,0,0,0.59)"
                }}
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}

export default Chat


