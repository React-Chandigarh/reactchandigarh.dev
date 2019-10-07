import React from 'react'
import withStyle from 'react-jss'

const widgetStyle = {
    widgetContainer:{       
        width:'100%',
        padding:'0 15px'
    },
    widgetTitle:{
        fontSize: '17px',
        float: 'left',
        textAlign: 'left',
        width: '100%',
        marginBottom: '30px',
        color: 'rgba(255,255,255,0.71)',
        fontWeight: '900',
        borderBottom: '1px solid rgba(255,255,255,0.11)',
        paddingBottom: '25px',        
    }
}


const Widget = ({children, WidgetTitle, classes}) => {
    return(
        <div className={classes.widgetContainer}>
            <h3 className={classes.widgetTitle}>{WidgetTitle}</h3>
            <p>{children}</p>
        </div>
    )
}

export default withStyle(widgetStyle)(Widget);