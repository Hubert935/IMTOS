import React from "react";
import { useTeamState } from "../../shared/api";
import { useState } from "react";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import {Divider} from "../../ui-lib/Divider/Divider";
import { Workers } from "./Workers/Workers";
import Chat from "./Chat/Chat";
import styles from "./Project.module.css"
import { Workday } from "./Workday/Workday";
import { Emotions } from "./Emotions/Emotions";

export const Project = () => {
    const teamState = useTeamState();
    const [joke , setJoke] = useState(" ");
        
    function generateJOD() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Access the result here
            var jokeOfTheDay = this.response.toString().split("text")[1].split(":")[1].split("}}],")[0];
            console.log(jokeOfTheDay)
            setJoke(jokeOfTheDay);      
        }
        };
        xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
        xhttp.send();
        var array = xhttp.response
        console.log(array)
        console.log(xhttp)
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.leftCol}>
                <Workday/>
                <Spacer size={16} />
                <Divider/>
                <Spacer size={16} />
                <Workers />

            </div>
            <Chat />
            <div className={styles.rightCol}>
                <Emotions/>
                <Spacer size={16} />
                <Divider/>
                <Spacer size={16} />
                <p>{teamState?.state.find((s) => s.key === "motion")?.value ?? "Unknown"}</p>
            <Spacer size={32} />
            <button onClick={generateJOD}>Hit me!</button>
            <p style={{color:"#ededed"}}>{joke}</p>
            </div>
        </div>
    )
}