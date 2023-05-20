import React from "react";

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void;

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}


function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

type AccordionPropsType = {
    titleValue: string;
    onChange:()=>void;
    collapsed:boolean

}


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


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

export default Accordion;