import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


// function hello() {
//
//     alert('Hello IT-KAMASUTRA')
// }


// function declaration
function App() {
    console.log("APP rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed = {true}/>
            <Accordion titleValue={"Users"} collapsed = {false}/>
            Article 2
            <Rating value={5}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
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
