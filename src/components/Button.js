import React from "react";

const Button = ({onClick,text,}) => {
    return(
        <button onClick={onClick} className='Btn1' >{text}</button>
    )
}

export default Button