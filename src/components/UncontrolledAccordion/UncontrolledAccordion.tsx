import React, {MouseEventHandler, useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return <div>
        <UncontrolledAccordionTitle titleValue={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
        {!collapsed && <UncontrolledAccordionBody/>}
    </div>
}

type UncontrolledAccordionTitlePropsType = {
    titleValue: string
    onClick: () => void


}


function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {


    console.log("AccordionTitle rendering")
    return (<div>
            <h3 onClick={() => {props.onClick() }}>--{props.titleValue}--</h3>
        </div>
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




