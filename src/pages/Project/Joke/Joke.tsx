import React, { useState } from "react";
import { Button } from "../../../ui-lib/Button/Button";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";

export const Joke =()=>{
    const [joke , setJoke] = useState(" ");

    function generateJOD() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
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

    return(<>
    <Button label={"Hit me!"} onClick={()=>{generateJOD()}}></Button>
    <Spacer size={16} />
    <p>{joke}</p>
    </>)
}