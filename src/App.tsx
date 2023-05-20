import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontroledRating";


// function hello() {
//
//     alert('Hello IT-KAMASUTRA')
// }


// function declaration
function App() {


    console.log("APP rendering")
    return (
        <div className={"App"}>

            <OnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>
            <Rating value={3}/>
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}


export default App;
