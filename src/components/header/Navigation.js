import React from 'react'
import withStyle from 'react-jss'
import { Link } from 'react-router-dom'
import { UserForm } from '../login'

const menu = [
    {
        id:'01',
        title:'Home',
        link:'/'
    },
    {
        id:'02',
        title:'News',
        link:'/'
    },
    {
        id:'03',
        title:'SingUp',
        link:'/Signup'
    }  
]

const NavStyle = {    
    menuContainer:{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: '0',
        padding: '0',
    },
    listName:{
        margin:'0',
        padding:'0'
    },
    menuName:{
        color:'#FFFFFF',
        fontSize:'14px',
        textDecoration:'none',
        padding:'0 20px'
    },
}

const Header = ({ classes}) => {
    return (
        <div className={classes.navContainer}>
            <ul className={classes.menuContainer}>                
                    {menu.map(menuitem => {
                        return(
                            <li className={classes.listName}><Link className={classes.menuName} to={menuitem.link} key={menuitem.id}>{menuitem.title}</Link></li>
                        )
                    })}                
                    <li className={classes.listName}><Link className={classes.menuName}><UserForm /></Link></li>                    
            </ul>
        </div>
    )
}

export default withStyle(NavStyle)(Header);