import React from 'react'
import withStyle from 'react-jss'
import { gridStyle } from './Grid.Style'

const Grid = ({classes, children, gridView="gridContainer"}) => <div className={classes[gridView]}>{children}</div>

export default withStyle(gridStyle)(Grid);