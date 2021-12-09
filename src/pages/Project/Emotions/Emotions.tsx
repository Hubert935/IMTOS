import React from "react";
import { useAddTeamEvent } from "../../../shared/api";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { emotions } from "../../../shared/types"
import { IconButton } from "../../../ui-lib/IconButton/IconButton";
import styles from "./Emotions.module.css"

export const Emotions = () => {
    const addTeamEvent = useAddTeamEvent();

    return (<>
        <h3>How are you feeling?</h3>
        <Spacer size={16} />
        <div className={styles.container}>
            <IconButton emoji={"😎"} onClick={
                async () => {
                    const result = await addTeamEvent(emotions[0]);
                    const data = result?.data?.addTeamEvent.data;
                    console.log(`event ${emotions[0].id} is now ${data}`);
                }
            } />
            <IconButton emoji={"😖"} onClick={async () => {
                const result = await addTeamEvent(emotions[1]);
                const data = result?.data?.addTeamEvent.data;
                console.log(`event ${emotions[1].id} is now ${data}`);
            }} />

        </div>

    </>)

}
