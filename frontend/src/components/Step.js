/* eslint-disable react/prop-types */
import React from "react";
// import { Link } from "react-router-dom";
export default function Step(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : "")}>
            <div className="circleWrapper">
                
                <div className="circle"></div>
            </div>
           
        </div>
    )
}