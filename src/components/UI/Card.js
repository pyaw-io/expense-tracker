import React from 'react';
import "./Card.css"

function Card(props){
    const classes = "card " + props.className
    return(
        
        <div className={classes}>{props.children}</div>

    )

}

export default Card

//custim components cant be used as rappers with stating props.children withing it tags
// the value of the childrenis the content in the opening and clossing tags

// when concatinating the classes, there should be a space between the last quote andthe class name eg "card "
