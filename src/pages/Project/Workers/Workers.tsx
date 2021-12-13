import React from 'react'
// import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { data } from "./WorkList";
import { Avatar } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useState, useEffect } from 'react';

export const Workers = (props)=>{
    const {working} = props;
    const [people, setPeople] = useState(data);

//    const doSomething = () =>{
//         if(working === true){
//             console.log('print')
//             var arr = [...people];
//             arr.push( {id: people.length, name: 'Max Lundqvist'})
//             setPeople(arr)
//         }else if(working === false && people.length > 7){
//             console.log('print2')
//              var arr2 = [...people];
//             arr2.splice((people.length - 1), 1);
//             setPeople(arr2);
//         }
//         console.log('print3')
//    }
   useEffect(()=>{
        if(working === true && people.length <= 8){
            console.log('print')
            var arr = [...people];
            arr.push( {id: people.length, name: 'Max Lundqvist', letter:"ML", color:"green"})
            setPeople(arr)
        }else if(working === false && people.length > 7){
            console.log('print2')
             var arr2 = [...people];
            arr2.splice((people.length - 1), 1);
            setPeople(arr2);
        }
        
   },[working])

    return(
        <>
         {console.log(working)} 
        {/* {console.log(people)} */}
        {people.map((employee, index)=>{
            var color = employee.color;
             return(
            <div key={index} style={{display:"flex", marginTop:"7px", alignItems: "center"}}>
            <Avatar style={{background:color}}>{employee.letter}</Avatar>
             <p style={{marginLeft:"6px"}}>{employee.name}</p>
             </div>
             );
            })}
            {/* <button onClick={doSomething}>hej</button> */}

    {/* <div>
        <h3>Working today: </h3>
        <Spacer size={10}/>
        <p>Pelle Persson</p>
        <p>Anna Andersson4</p>
        <p>Pelle Persson</p>
        <p>Pelle Persson</p>
        <p>Pelle Persson</p>
        <p>Pelle Persson</p>
        <p>Pelle Persson</p>
        <p>Pelle Persson</p>

    </div> */}
    </>
    );

}