import React from 'react'
import './App.css';

const Hello = (props) => (
    <div className="Hello">
        <h1>Hello {props.aka.personName}</h1>
        <h2>from {props.aka.personCity}</h2>
        <p>I like <ul>{props.aka.favorites.map(animal => {
            return <li>{animal}</li>
        })}</ul> </p>
    </div>
)


export default Hello

// can also do anonymous function
// 
// export default Helloexport default () => (
// 	<div>
//         <h1>Hello World</h1>
//         <h2>from New York</h2>
//     </div>
// )


