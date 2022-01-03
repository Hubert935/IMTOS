import _ from "lodash";
import React, { useEffect, useState} from "react";
import { useTeamEventMean } from "../../../shared/api";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import styles from "./OfficeMood.module.css"
import happy from './Happy.png'
import fika from './Fika.png'
import { CloseButton } from "../../../ui-lib/CloseButton/CloseButton";


export const OfficeMood=()=>{
    const [happyNotice, setHappyNotice] = useState(false);
    const [sadNotice, setSadNotice] = useState(false);
    const teamEventMean = useTeamEventMean();
    const happyValue = _.round(
        teamEventMean?.find((m) => m.type === "emotion-1")?.value ?? 0,
        2
    );
    const sadValue = _.round(
        teamEventMean?.find((m) => m.type === "emotion-2")?.value ?? 0,
        2
    );
    
    useEffect(()=>{
        if(happyValue > 2) {
            setHappyNotice(true);
        } else if(happyValue === 0){
            setHappyNotice(false);
        }
        
        if(sadValue > 2){
            setSadNotice(true);

        } else if(sadValue === 0){
            setSadNotice(false);
        }
    },[happyValue,sadValue])

    return (<>
        <Spacer size={16}/>
        <div style={happyNotice ? {display:"grid"}:{display: "none"}} className={styles.container} id={styles.slide}>
            <CloseButton onClick={()=>{setHappyNotice(false)}} emoji={"✖️"}/>
            <img src={happy} className={styles.icon} alt={"hearteye emoji"}/>
            <p className={styles.p1}>A lot of people at the office seem to feel quite happy! You are in the flow! Keep up the good work! 🤩 </p>
        </div>
        <div style={sadNotice ? {display:"grid"}:{display: "none"}} className={styles.container} id={styles.slide}>
            <CloseButton onClick={()=>{setSadNotice(false)}} emoji={"✖️"}/>
            <img src={fika} className={styles.icon} alt={"coffee cup emoji"}/>
            <p className={styles.p1}>People at the office seem to feel quite stressed, maybe it's time for some fika? ☕️ 🥐</p> 
            <br/> 
            <p>Let's take a break!</p>
        </div>

    </>)
}
