import React from 'react'
import withStyle from 'react-jss'

const logoStyle = {
    logoContainer: {
        color:'#FFF'
    }
}

const Logo = ({ classes, ...props }) => {
    return(
        <h3 className={classes.logoContainer}>{props.name}</h3>
    )
}
export default withStyle(logoStyle)(Logo);