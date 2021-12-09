import React from "react";
import { useTeamState } from "../../shared/api";
import { Workers } from "./Workers/Workers";
import { Chat } from "./Chat/Chat";
import styles from "./Project.module.css"
import { Workday } from "./Workday/Workday";
import { Emotions } from "./Emotions/Emotions";
import { Joke } from "./Joke/Joke";
import { SpacerDivider } from "../../ui-lib/Divider/SpacerDivider";

export const Project = () => {
    const teamState = useTeamState();

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
                <p>{teamState?.state.find((s) => s.key === "motion")?.value ?? "Unknown"}</p>
                <SpacerDivider/>
                <Joke/>
                <SpacerDivider/>
            </div>
        </div>
    )
}