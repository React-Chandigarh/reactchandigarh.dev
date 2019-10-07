import React from 'react'
import { CatStyle } from './imgGrid.Style'
import withStyle from 'react-jss'

const Image = withStyle(CatStyle)(({ item, classes }) => (
    <div className={classes.catContainer} catImage={item.img}>
        <h2>{item.title}</h2>
        <p>{item.shortdescription}</p>
    </div>
));

export default withStyle(CatStyle)(Image);