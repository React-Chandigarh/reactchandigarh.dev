import React from 'react'
import withStyle from 'react-jss'
import { MainNav, Logo } from './'

const HeaderStyle = {
    headerOuterContainer:{
        width:'100%',
        backgroundColor: '#2F3B59',                        
    },
    headContainer:{
        maxWidth:'1200px',
        width:'100%',
        margin:'0 auto',
        display:'flex',
        justifyContent:'space-between'
    }
}

const Header = ({classes}) => {
    return (
        <div className={classes.headerOuterContainer}>
            <div className={classes.headContainer}>
                <Logo name="Company Name" />
                <MainNav />            
            </div>
        </div>
    )
}

export default withStyle(HeaderStyle)(Header);
