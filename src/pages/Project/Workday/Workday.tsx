import React from "react";
import { useAddTeamEvent } from "../../../shared/api";
import { useState } from "react";

import { Button } from "../../../ui-lib/Button/Button";
import { working } from "../../../shared/types"
import styles from "./Workday.module.css"

export const Workday = (props) => {
    const addTeamEvent = useAddTeamEvent();
    const [eventType, setEventType] = useState(working[0]);
    const [work, setWork] = useState(false);
    const checkTrueOrFalse = () => {
        if (eventType === working[0]) {
            setEventType(working[1])
            setWork(false)
        } else {
            setEventType(working[0])
            setWork(true)
        }
    }

    return (<>
        <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <div className={styles.lamp} style={(eventType === working[0]) ? { background: "var(--color-pink-light)" } : { background: "var(--color-green-light)" }} /> */}

            <Button
                label={(eventType === working[0]) ? "Begin Workday!" : "End Workday!"}
                onClick={async () => {
                    const result = await addTeamEvent(eventType);
                    const data = result?.data?.addTeamEvent.data;
                    checkTrueOrFalse()
                    console.log(`event ${eventType.id} is now ${data}`);
                    props.onBuy(work)
                }}
            />
        </div>
    </>)

}