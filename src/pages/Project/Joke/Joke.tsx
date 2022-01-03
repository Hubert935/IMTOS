import React, { useState } from "react";
import { Button } from "../../../ui-lib/Button/Button";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";

export const Joke =()=>{
    const [joke , setJoke] = useState(" ");
    const [response, setRespone] = useState({})

    function generateJOD(typeOfJoke) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Access the result here
            // var jokeOfTheDay = this.response.toString().split("text")[1].split(":")[1].split("}}],")[0];
            // console.log(jokeOfTheDay)
            //setJoke(jokeOfTheDay);  
            setRespone(this.response)   
            const start = this.response.toString().search("text")
            const end = this.response.toString().search("copyright")
            // let length = this.response.toString().substr(end +9, 2);
            // console.log(this.response.toString())
            // console.log(start) 
            // console.log(length)
            let finalJoke = this.response.toString().substr(start+7, -(start - (end - 13)));
            finalJoke = finalJoke.replace(/\\/g, '');
            finalJoke = finalJoke.replace(/rn/g, '');
            console.log(finalJoke)
            setJoke(finalJoke);
           
        }
        };
        xhttp.open("GET", `https://api.jokes.one/jod?category=${typeOfJoke}`, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
        xhttp.send();
        var array = xhttp.response
        console.log(array)  
        console.log(xhttp)
    }

    return(<>
    <h3>Joke of the day:</h3>
    <Spacer size={16}/>
    <div style={{display:"flex"}}>
    {/* <Button label={"1"} onClick={()=>{generateJOD("blonde")}}></Button> */}
    <Spacer size={16} />
    <Button label={"Animal"} onClick={()=>{generateJOD("animal")}}></Button>
    <Spacer size={16} />
    <Button label={"random"} onClick={()=>{generateJOD("jod")}}></Button>
    <Spacer size={16} />
    </div>
    <Spacer size={16} />
    <p>{joke}</p>
    </>)
}