import React from 'react'
import mainBanner from './../../images/mainBanner.jpg'
import withStyle from 'react-jss'

const comBackImage = {    
    backgroundImage: `url(${mainBanner})`,
    width:'100%',
    backgroundSize:'cover',
    height:'700px',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    display: 'flex',
    flexFlow: 'column',
    justifyContent:'center'
}

const bannerStyle = {
    bannerConntainer:{
        ...comBackImage,        
    },
    bannerTitle: {
        color:'#FFF',
        fontSize:'60px'
    }
}

const Banner = ({ classes, bannertitle }) => {
    return(
        <div className={classes.bannerConntainer}>            
            <h1 className={classes.bannerTitle}>{bannertitle}</h1>
        </div>
    )
}
export default withStyle(bannerStyle)(Banner);