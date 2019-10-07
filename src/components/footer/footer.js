import React from 'react'
import withStyle from 'react-jss'
import { Widget } from './../widget'
import { TwitterComponent } from '../twitter'
import { SubScribe } from '../subscribe'

const footerStyle = {
    footerContainer: {
        width:'100%',
        backgroundColor:'#2C3B5A',
        minHeight:'400px',
        margin:'0',
        padding:'10px 0 0 0'   
    },
    innerContainer: {
        maxWidth:'1200px',
        width:'100%',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        margin:'0 auto'
    }
}

const Footer = ({ classes }) => {
    return(
        <div className={classes.footerContainer}>
            <div className={classes.innerContainer}>
                <Widget WidgetTitle="About Us" >
                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. </p>
                </Widget>
                <Widget WidgetTitle="Our Last Meetup" />
                <Widget WidgetTitle="Our Twitter">
                    <TwitterComponent />
                </Widget>
                <Widget WidgetTitle="Subscribe">
                  <SubScribe />
                </Widget>
            </div>
        </div>
    )
}

export default withStyle(footerStyle)(Footer);