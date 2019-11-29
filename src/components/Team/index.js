import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './team.css';
import withStyle from 'react-jss'

const teamStyle = {
    container: {
        width:'100%',
        maxWidth:'1200px',
        margin:'0 auto'
    },
    whitBox:{
        border:'1px solid #BEC9D6',
        boxShadow:'#ccc 2px 2px 2px',
        minHeight:'180px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        padding:'40px 0',
        position:'relative',
        margin:'0 0 40px 0'
    },
    socialIcon:{
        position: 'absolute !important',
        bottom: '-22px',
    }
}

const Team = ({classes}) => (
    <>
        <div className={classes.container}>
            <div className="team__grid">
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/sarab.jpg')} alt="Sarab" />
                    </div>
                    <h4>Sarab</h4>
                    <SocialIcon className={classes.socialIcon} url="https://twitter.com/sarabs3" />
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/pallavi.jpg')} alt="Pallavi" />
                    </div>
                    <h4>Pallavi</h4>
                    <SocialIcon className={classes.socialIcon} url="https://twitter.com/pallavigarg89" />
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/tarun.jpg')} alt="Tarun" />
                    </div>
                    <h4>Tarun</h4>
                    <SocialIcon className={classes.socialIcon} url="https://twitter.com/tarunnagpal78" />
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/kavita.jpg')} alt="Kavita" />
                    </div>
                    <h4>Kavita</h4>
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/sahil.jpg')} alt="Sahil" />
                    </div>
                    <h4>Sahil</h4>
                    <SocialIcon className={classes.socialIcon} url="https://twitter.com/sahildhimansan" />
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/chandan.jpg')} alt="Chandan" />
                    </div>
                    <h4>Chandan</h4>
                    <SocialIcon className={classes.socialIcon} url="https://twitter.com/rathore_rana" />
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/male.jpeg')} alt="Saurav" />
                    </div>
                    <h4>Saurav</h4>
                </div>
                <div className={classes.whitBox}>
                    <div className="team__member_image">
                        <img src={require('./../../images/manjot.jpg')} alt="Manjot" />
                    </div>
                    <h4>Manjot</h4>
                </div>
                <div className="team__member team__member--join">
                    <div className="team__member_image">
                        <img src={require('./../../images/join.png')} alt="Manjot" />
                    </div>
                    <a target="_blank" href="https://forms.gle/fmLr4bt75wd8whN2A">Join Our Team</a>
                </div>
            </div>
        </div>
        <div className="spacer"></div>
    </>
);

export default withStyle(teamStyle)(Team);
