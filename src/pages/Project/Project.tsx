import React from "react";
import styles from "./Project.module.css"
import { Workers } from "./Workers/Workers";
import { Chat } from "./Chat/Chat";
import { Workday } from "./Workday/Workday";
import { Emotions } from "./Emotions/Emotions";
import { Joke } from "./Joke/Joke";
import { SpacerDivider } from "../../ui-lib/Divider/SpacerDivider";
import { OfficeMood } from "./OfficeMood/OfficeMood";    
import _ from "lodash";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { useState } from "react";
import Help from "../Help/Help";
import { useTeamState } from "../../shared/api";

export const Project = () => {
    const [atWork, setAtWork] = useState(false);
    const teamState = useTeamState();

    const setWorking = (working) => {
        if(working === false){
            setAtWork(false)
        }else{
            setAtWork(true)
        }
        console.log(working)
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
                <h3>Notices:</h3>
                <Spacer size={16}/>
                <Help motion={teamState?.state.find((s) => s.key === "motion")?.value}/>
                <SpacerDivider/>
                <OfficeMood/>
                <SpacerDivider/>
                <Joke/>
                <SpacerDivider/>
            </div>
        </div>
    )
}