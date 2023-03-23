import React from "react";

const Input = (props) => {
    return (
        <input {...props.input} 
            className='form-control' 
            placeholder={props.placehoder}
            readOnly={props.readOnly}
            type={props.type} />
    )
}

export default Input