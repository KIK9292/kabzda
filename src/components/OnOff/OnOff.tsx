import React from 'react';
import {inspect} from "util";


type OnOffPropsType = {
    selec: boolean
}


export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inLine-block",
        padding: "2px",
        backgroundColor: props.selec ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inLine-block",
        padding: "2px",
        backgroundColor: !props.selec ? "red" : "white"
    }
    const indicator = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inLine-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: props.selec ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle}>on</div>
            <div style={offStyle}>off</div>
            <div style={indicator}></div>
        </div>
    );
};

