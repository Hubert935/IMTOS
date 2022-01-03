import { checkDEV } from '@apollo/client/utilities/globals';
import React, { useEffect }  from 'react'
import icon from './Hi.png'
import styles from './Help.module.css'

const Help = (props) => {
    const value = Number(props.motion);


   const check = ()=>{
    if(value === 1){

        return(
                <div className={styles.container} id={styles.slide}>
                    <img src={icon} className={styles.icon}></img>
                    <p className={styles.p1}>Hi! There's someone at your desk! You can talk to them in the chat. 😊</p>
                </div>)
        }else{
            return(<></>)
        }

   }

   return <>{check()}</>

}

export default Help
