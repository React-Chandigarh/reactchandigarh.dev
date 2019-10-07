const gridLayout = {
    justifyContent: 'center',
    alignItems: 'center',
}

export const gridStyle = {
    gridContainer: {
        ...gridLayout,
        backgroundColor: props => props.bg ? props.bg : "",
        // width: props => props.col ? `${props.col / 12 *100}%` : "8.3%",
        width: props => props.col ? `${(100 / props.col).toFixed(2)}%` : "8.3%",
        // width: props => props.col ? `${(100 / props.col).toFixed(2)}%` : "8.3%",
        display: props => props.comView ? props.comView : 'block',
    },
    gridColumn: {
        ...gridLayout,        
        width: props => props.col ? `${props.col / 12 *100}%` : "8.3%",
        float:'left'        
    }    
}