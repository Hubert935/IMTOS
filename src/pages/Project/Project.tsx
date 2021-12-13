import React from "react";
import { useTeamEventMean, useTeamState } from "../../shared/api";
import { Workers } from "./Workers/Workers";
import { Chat } from "./Chat/Chat";
import styles from "./Project.module.css"
import { Workday } from "./Workday/Workday";
import { Emotions } from "./Emotions/Emotions";
import { Joke } from "./Joke/Joke";
import { SpacerDivider } from "../../ui-lib/Divider/SpacerDivider";
import _ from "lodash";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { useState } from "react";
import Help from "../Help/Help";

export const Project = () => {
    const teamState = useTeamState();
    const teamEventMean = useTeamEventMean();
    const [atWork, setAtWork] = useState(false);
    const happyValue = _.round(
        teamEventMean?.find((m) => m.type === "emotion-1")?.value ?? 0,
        2
    );
    const sadValue = _.round(
        teamEventMean?.find((m) => m.type === "emotion-2")?.value ?? 0,
        2
    );

    const setWorking = (working) => {
        if(working === false){
            setAtWork(false)
        }else{
            setAtWork(true)
        }
        console.log(working)
    }

    const help =()=>{
        const val = teamState?.state.find((s) => s.key === "motion")?.value ?? "Unknown"
        console.log('heehehehhehehe' + val)
        if(val === "0" || "unknown"){
            return (
                <>
                    <p>😖</p>
                </>
            );
        } else{
            return (
                <>
                    <p>😎</p>
                </>
            );
        }
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.leftCol}>
                <Workday onBuy={setWorking}/>
                <SpacerDivider/>
                <Workers working={atWork}/>
            </div>
            <Chat/>
            <div className={styles.rightCol}>
                <Emotions/>
                <SpacerDivider/>
                <h3>Your desk:</h3>
                <Spacer size={16}/>
                
                <Help motion={teamState?.state.find((s) => s.key === "motion")?.value}/>
                {/* <p>{teamState?.state.find((s) => s.key === "motion")?.value ?? "Unknown"}</p> */}
                {/* {help()} */}
                <SpacerDivider/>
                <h3>Office Mood:</h3>
                <Spacer size={16}/>
                <p>HappyValue: {happyValue}</p>
                <Spacer size={16}/>
                <p>SadValue: {sadValue}</p>
                <SpacerDivider/>
                <Joke/>
                <SpacerDivider/>
            </div>
        </div>
    )
}