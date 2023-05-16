import React, {MouseEventHandler, useState} from "react";

type UncontrolledAccordionTitlePropsType = {
    titleValue: string


}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType){
    const [shrink, setShrink] = useState<boolean>(false)
    const onCickHandler = () => {
        (shrink === false)?setShrink(true) : setShrink(false)
    }
    console.log("AccordionTitle rendering")
    return (<div>
        <h3 onClick={onCickHandler}>{props.titleValue}</h3>
    {!shrink && <UncontrolledAccordionBody/>}</div>
    )
}


function UncontrolledAccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

// type UncontrolledAccordionPropsType = {
//     titleValue: string;
//     collapsed: boolean;
//
// }


// function Accordion1(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed === true) {
//         return (<div>
//             <AccordionTitle title={props.titleValue}/>
//
//         </div>)
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     }
// }


function UncontrolledAccordion(props: UncontrolledAccordionTitlePropsType) {
    console.log("Accordion rendering")

    return <div>
        <UncontrolledAccordionTitle titleValue={props.titleValue} />

    </div>
}

export default UncontrolledAccordion;