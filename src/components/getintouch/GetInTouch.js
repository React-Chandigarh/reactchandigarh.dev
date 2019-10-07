import React from 'react'
import withStyle from 'react-jss'

const getInTouch = {
    container:{ 
        width:'100%',
        minHeight:'300px',
        display:'flex',
        backgroundColor: '#3EAAFD',
        margin:'50px 0 0 0'        
    },
    innerContainer:{
        width:'100%',
        maxWidth:'1200px',
        margin:'0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign:'left',
        minHeight:'300px',
        height: '100%',
        alignItems: 'center'
    },
    getBtn:{
        padding: '20px 55px',
        textTransform: 'uppercase',
        background: '#fff',
        borderRadius: '30px',
        fontSize: '11px',
        fontWeight: '700',
        position: 'relative',
        top: '15px',
        boxShadow: '0px 0px 0px 7px rgba(255,255,255,0.4)',
        cursor:'pointer',
        border:'0'
    }
}

const GetInTouch = ({classes}) => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div>
                    <h2>Do You Have Questions ?</h2>
                    <p>Lorem ipsum dolor sit amet, harum dolor nec in, usu molestiae at no.</p>
                </div>
                <div>
                    <input type="button" value="Get In Touch" className={classes.getBtn} />
                </div>
            </div>
        </div>
    )
}
export default withStyle(getInTouch)(GetInTouch);