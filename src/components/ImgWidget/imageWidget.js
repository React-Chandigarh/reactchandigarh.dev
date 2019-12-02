import React from 'react'
import { imageStyle } from './image.Style'
import withStyle from 'react-jss'

const ImageWidget = ({ item, classes }) => (
    (
        <a className={classes.eventContainer} href={item.eventLink} target="_blank">
            <div className={classes.imageContainer}>
            <h2 className={classes.eventName}>{item.eventName}</h2>
            <span className={classes.eventDate}>{item.eventDate}</span>
            </div>
            <p className={classes.eventDescription}>{item.eventDescription}</p>
        </a>
    )
)

export default withStyle(imageStyle)(ImageWidget)