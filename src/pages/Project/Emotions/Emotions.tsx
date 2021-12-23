import React, { useState } from "react";
import { useAddTeamEvent } from "../../../shared/api";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { emotions } from "../../../shared/types"
import { IconButton } from "../../../ui-lib/IconButton/IconButton";
import styles from "./Emotions.module.css"
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const Emotions = () => {
    const addTeamEvent = useAddTeamEvent();
    const [chilled, setChilled] = useState(false);
    const [stressed, setStressed] = useState(false);
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (<>
        <h3>How are you feeling?</h3>
        <Spacer size={16} />
        <div className={styles.container}>
            
            

        </div>
        <Box sx={{ width: 300 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <IconButton
                    emoji={"😖"}
                    color={stressed ? "var(--color-pink-light)" : "var(--color-primary-medium)"}
                    onClick={async () => {
                        setStressed(true);
                        setChilled(false);
                        const result = await addTeamEvent(emotions[1]);
                        const data = result?.data?.addTeamEvent.data;
                        console.log(`event ${emotions[1].id} is now ${data}`);
                        }
                    } 
                />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    <IconButton
                    emoji={"😎"}
                    color={chilled ? "var(--color-green-light)" : "var(--color-primary-medium)"}
                    onClick={
                        async () => {
                            setChilled(true);
                            setStressed(false);
                            const result = await addTeamEvent(emotions[0]);
                            const data = result?.data?.addTeamEvent.data;
                            console.log(`event ${emotions[0].id} is now ${data}`);
                        }
                    } 
                />
            </Stack>
        </Box>

    </>)

}
