import React from 'react'
import bannerImage from './../../images/mainBanner.jpg'
import withStyle from 'react-jss'

const bannerBackground = {
    backgroundImage: `url(${bannerImage})`,
    width:'100%',
    backgroundSize:'cover',
    height:'700px',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    display:'flex',
    flexFlow:'colum',
    justifyContent:'center'
}

const bannerStyle = {
    bannerContainer: {
        ...bannerBackground,
    },
    bannerTitle:{
        color:'#FFF',
        fontSize:'60px'
    }
}

const Banner = ({ classes, bannerTitle}) => {
    return(
        <div className={classes.bannerContainer}>
            <h1 className={classes.bannerTitle}>{bannerTitle}</h1>
        </div>
    )
}

export default withStyle(bannerStyle)(Banner);