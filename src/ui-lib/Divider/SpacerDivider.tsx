import React from "react";
import { Spacer } from "../Spacer/Spacer";
import { Divider } from "./Divider";

export const SpacerDivider =()=>{
    return(<>
    <Spacer size={16}/>
    <Divider/>
    <Spacer size={16}/>
    </>)
}