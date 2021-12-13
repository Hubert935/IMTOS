import React from "react";
import styles from "./Project.module.css"
import { Workers } from "./Workers/Workers";
import { Chat } from "./Chat/Chat";
import { Workday } from "./Workday/Workday";
import { Emotions } from "./Emotions/Emotions";
import { Joke } from "./Joke/Joke";
import { SpacerDivider } from "../../ui-lib/Divider/SpacerDivider";
import { OfficeMood } from "./OfficeMood/OfficeMood";
import { DeskAllert } from "./DeskAllert/DeskAllert";

export const Project = () => {
    
    return (
        <div className={styles.gridContainer}>
            <div className={styles.leftCol}>
                <Workday/>
                <SpacerDivider/>
                <Workers />
            </div>
            <Chat/>
            <div className={styles.rightCol}>
                <Emotions/>
                <SpacerDivider/>
                <DeskAllert/>
                <SpacerDivider/>
                <OfficeMood/>
                <SpacerDivider/>
                <Joke/>
                <SpacerDivider/>
            </div>
        </div>
    )
}