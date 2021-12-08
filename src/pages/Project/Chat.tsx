import React from 'react'
import { useState, useEffect } from "react";
import styles from "./Chat.module.css"
import { Button } from '../../ui-lib/Button/Button';
import { Console } from 'console';


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

    const clearArray = () => {
        var arr: ToppersData[];
        arr = [];
        setChatMessage(arr);
    }

    const create = (message: string, pos: string) =>{
        const tempPos = pos;

        if(pos==="right"){
            return (
                <>
                <br/>
                <div style={{textAlign: "right",  width:"100%"}}>
                    <p style={{marginRight:"17px", fontSize:"12px", color:"#d4d4d4"}}>Anna</p>
                    <div style={{background:"#596b78", width:"60%",  borderRadius:"10px", marginLeft:"37.5%"}}>
                    <p style={{marginRight:"10px", color:"#ededed", opacity:"1"}}>{message}</p>
                    </div> 
                </div>
                </>
            )
        }else{
            return (
                <>
                <br />
                <div style={{textAlign: "left", width:"100%"}}>
                     <p style={{marginLeft:"14px", fontSize:"12px", color:"#d4d4d4"}}>Pelle</p>
                    <div style={{ background:"#515960", width:"60%",  borderRadius:"10px", marginLeft:"10px"}}>
                        <p style={{marginLeft:"10px", color:"#ededed"}}>{message}</p>
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
            height:"500px", overflow:"auto", background:"var(--color-grey-ultra-dark)",
             borderRadius:"20px", textAlign:"right"
            }} >    
                    <button style={{color:"#d4d4d4", marginRight:"13px", background:"#515960", 
                        borderRadius:"13px", border:"none", marginTop:"13px", boxShadow:"0.1px 0.2px 0px 0px rgba(0,0,0,0.1)"
                    }}  onClick={clearArray}>
                        clear
                    </button>
                    
                    {chatMessage.map((chatMessage) => (
                        create(chatMessage.msg, chatMessage.position)
                        
                    ))}
                
            </div>
            

        </div>
        <div style={{ marginTop:"4px", marginLeft:"13%", width:"75%"}}>
            <form onSubmit={submitForm}>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="Type your message..."
                    className="input"
                    style={{width:"80%", height:"2rem", padding:"5px", borderRadius:"12px", border:"none"}}
                    required
                />
                <button type="submit" className="btn"
                style={{
                    background:"var(--color-primary-medium)", borderRadius:"16px", width:"80px", border:"none", 
                    height:"2rem", boxShadow:"1px 1px 5px 2px rgba(0,0,0,0.1)", color:"var(--color-grey-ultra-dark)",
                    fontSize:"16px", fontWeight:"500", marginLeft:"3px"
                }}
                >
                    Send
                </button>
                    

            </form>
            </div>
        </div>
    )
}

export default Chat


