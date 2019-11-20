import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './team.css';

const Team = () => (
    <>
        <div className="team">
            <div className="team__grid">
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./sarab.jpg')} alt="Sarab" />
                    </div>
                    <h4>Sarab</h4>
                    <SocialIcon url="https://twitter.com/sarabs3" />
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./pallavi.jpg')} alt="Pallavi" />
                    </div>
                    <h4>Pallavi</h4>
                    <SocialIcon url="https://twitter.com/pallavigarg89" />
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./tarun.jpg')} alt="Tarun" />
                    </div>
                    <h4>Tarun</h4>
                    <SocialIcon url="https://twitter.com/tarunnagpal78" />
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./kavita.jpg')} alt="Kavita" />
                    </div>
                    <h4>Kavita</h4>
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./sahil.jpg')} alt="Sahil" />
                    </div>
                    <h4>Sahil</h4>
                    <SocialIcon url="https://twitter.com/sahildhimansan" />
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./chandan.jpg')} alt="Chandan" />
                    </div>
                    <h4>Chandan</h4>
                    <SocialIcon url="https://twitter.com/rathore_rana" />
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./male.jpeg')} alt="Saurav" />
                    </div>
                    <h4>Saurav</h4>
                </div>
                <div className="team__member">
                    <div className="team__member_image">
                        <img src={require('./female.jpeg')} alt="Manjot" />
                    </div>
                    <h4>Manjot</h4>
                </div>
                <div className="team__member team__member--join">
                    <div className="team__member_image">
                        <img src={require('./join.png')} alt="Manjot" />
                    </div>
                    <a target="_blank" href="https://forms.gle/fmLr4bt75wd8whN2A">Join Our Team</a>
                </div>
            </div>
        </div>
        <div className="spacer"></div>
    </>
);

export default Team;
