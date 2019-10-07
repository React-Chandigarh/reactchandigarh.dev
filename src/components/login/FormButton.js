import React from 'react'

const FormButton = (props) => {
    return(
        <React.Fragment>
            <button onClick={props.formbtn}>Login</button>
            <button  onClick={props.formbtn}>Register</button>
        </React.Fragment>
    )
}

export default FormButton;