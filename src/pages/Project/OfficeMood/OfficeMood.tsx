import _ from "lodash";
import React, { useEffect} from "react";
import { useTeamEventMean } from "../../../shared/api";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import EmotionSlider from "./reactSlider";


export const OfficeMood=()=>{
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
        const temp = _.round((happyValue - sadValue));
        console.log(temp);
    },[happyValue,sadValue])

    return (<>
        <h3>Office Mood:</h3>
        <Spacer size={16}/>
        <p>HappyValue: {happyValue}</p>
        <Spacer size={16}/>
        <p>SadValue: {sadValue}</p>
    </>)
}
