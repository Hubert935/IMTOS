import { checkDEV } from '@apollo/client/utilities/globals';
import React from 'react'

const Help = (props) => {
    const {value} = props;
    

    const check=()=>{
        if(value != 0 || 1){
            return <>
                <div style={{height:"30px", width:"30px", borderRadius:"50%", background:"red"}}></div>
            </>
        }else if(value === 1){
            return <>
                <div style={{height:"30px", width:"30px", borderRadius:"50%", background:"green"}}></div>
            </>
        }else{
            <div style={{height:"30px", width:"30px", borderRadius:"50%", background:"red"}}></div>
        }
    }

    return (
        <div>
            {check()}
        </div>
    )
}

export default Help
