import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontroledOnOff} from "./components/UncontroledOnOff/UncontroledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontroledRating";
import {OnOff} from "./components/OnOff/OnOff";


// function hello() {
//
//     alert('Hello IT-KAMASUTRA')
// }


// function declaration
function App() {
    console.log("APP rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed,setAccordionCollapsed] =useState<boolean>(false)
    let [switchON,setswitchON] =useState<boolean>(false)
    return (
        <div className={"App"}>

            {/*<UncontroledOnOff/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<OnOff on={switchON} onChange={(on)=>{ setswitchON(on)}}/>*/}
            <OnOff on={switchON} onChange={setswitchON}/>
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
