import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    setValue: (value:1|2|3|4|5) => void
    value:1|2|3|4|5
}

function Star(props: StarPropsType) {
    // if (props.selected === true) {
    //     return <span><b>star </b></span>;
    // } else {
    //     console.log("Star rendering")
    //     return (
    //         <span>star </span>
    //     )
    // }
    // return props.selected ? <span><b>star </b></span> : <span>star </span>

    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : "star"}
    </span>
}

export function UncontrolledRating() {
    console.log("Rating rendering")
    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );


}