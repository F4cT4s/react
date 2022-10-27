import React from "react";

const Button = ({onClick,text}) => {
    return(
        <button onClick={onClick} className='btn'>{text}</button>
    )
}

export default Button