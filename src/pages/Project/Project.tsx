import React, { useEffect } from "react";
import { useAddTeamEvent, useTeamState } from "../../shared/api";
import { useState } from "react";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { Button } from "../../ui-lib/Button/Button";
import { working, emotions } from "../../shared/types"
import { Workers } from "./Workers";
import { set } from "lodash"
import Chat from "./Chat";
import styles from "./Project.module.css"

export const Project = () => {
    const addTeamEvent = useAddTeamEvent();
    const teamState = useTeamState();

    const [eventType, setEventType] = useState(working[0]);
    const checkTrueOrFalse = () => {
        if (eventType == working[0]) {
            setEventType(working[1])
        } else {
            setEventType(working[0])
        }
    }

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div className={styles.gridContainer}>
            <div>
            <Spacer size={32} />
            <Button
                label="Check in"
                onClick={async () => {
                    const result = await addTeamEvent(eventType);
                    const data = result?.data?.addTeamEvent.data;
                    checkTrueOrFalse()
                    console.log(`event ${eventType.id} is now ${data}`);
                }}
            />
                        <Spacer size={32} />
            <p>{teamState?.state.find((s) => s.key === "motion")?.value ?? "Unknown"}</p>
            <Workers></Workers>

            </div>
            <Chat />
            <div>

            <Spacer size={32} />
            <Button
                label=":)"
                onClick={
                    async () => {
                        const result = await addTeamEvent(emotions[0]);
                        const data = result?.data?.addTeamEvent.data;
                        console.log(`event ${emotions[0].id} is now ${data}`);
                    }
                }
            />
            <Spacer size={16} />
            <Button
                label=":("
                onClick={async () => {
                    const result = await addTeamEvent(emotions[1]);
                    const data = result?.data?.addTeamEvent.data;
                    console.log(`event ${emotions[1].id} is now ${data}`);
                }}
            />
            <Spacer size={32} />

            </div>
        </div>
    )
}