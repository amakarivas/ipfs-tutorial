import React from 'react';
import './Input.css';
const Input=(props)=>{
    return(
        <input  onChange ={props.onChange}  className="Input" type="file" placeholder="Hi there dude" />
    );
}

export default Input;