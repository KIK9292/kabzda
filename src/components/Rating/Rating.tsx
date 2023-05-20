import React from "react";

export type RatingValueType=0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}

type StarPropsType ={
    selected:boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType
}

function Star(props: StarPropsType) {
//     if (props.selected === true) {
//         return <span><b>star </b></span>;
//     } else {
//         console.log("Star rendering")
//         return (
//             <span>star </span>
//         )
//     }
//     return  props.selected ?  <span><b>star </b></span> :  <span>star </span>
    return <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>star </b> : "star"}</span>
 }

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

        return (
            <div>
                <Star selected={props.value>0} onClick={props.onClick} value={1}/>
                <Star selected={props.value>1} onClick={props.onClick} value={2}/>
                <Star selected={props.value>2} onClick={props.onClick} value={3}/>
                <Star selected={props.value>3} onClick={props.onClick} value={4}/>
                <Star selected={props.value>4} onClick={props.onClick} value={5}/>
            </div>
        );



}