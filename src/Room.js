
import React, { useState } from 'react';
import './App.css';


function Room() {
    // const state = useState(true);
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(24);
    
     
    return(
    <div> 
        This room is {isLit ?  "lit" : "dark"}
        <br/>
        Age : {age}  
        <br/>
        <button onClick={() => setLit(!isLit)}>Toggle Light</button>
        <br/>
        <button onClick={  ()=> {
            console.log("Increase age arrow function");
            setAge(++age);
        }}>
            Increase Age </button>
        </div>
       );
    }
    export default Room;
