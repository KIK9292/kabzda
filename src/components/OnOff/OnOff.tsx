import React, {useState} from 'react';
import {inspect} from "util";


type OnOffPropsType = {
    // selec: boolean
}


export const OnOff = (props:OnOffPropsType) => {

    const[on,setOn]=useState(false)

    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inLine-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inLine-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicator = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inLine-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>on</div>
            <div style={offStyle} onClick={()=>setOn(false)}>off</div>
            <div style={indicator}></div>
        </div>
    );
};

