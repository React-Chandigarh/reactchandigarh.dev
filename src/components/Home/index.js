import React from 'react';
import logo from './logo.svg';
import './home.css';

const Home = () => (
    <>
    <div style={{ display: 'flex' }}>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to React Chandigarh!
            </p>
            <a
                className="App-link"
                href="https://www.meetup.com/Chandigarh-React-Developers/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit our meetup group.
            </a>
        </div>
        <div className="pastEvents">
            <h3>Past Events</h3>
            <ul className="pastEvents__list">
                <li>
                    <div>
                        <h4>13 Oct 2019</h4>
                        <a href="https://www.meetup.com/Chandigarh-React-Developers/">8th ReactJs Meetup</a>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>05 Oct 2019</h4>
                        <a href="https://www.meetup.com/Chandigarh-React-Developers/">2nd ReactJs Workshop</a>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>24 Sep 2019</h4>
                        <a href="https://www.meetup.com/Chandigarh-React-Developers/">7th ReactJs Meetup</a>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>31 Aug 2019</h4>
                        <a href="https://www.meetup.com/Chandigarh-React-Developers/">1st ReactJs Workshop</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
        
    </>
);

export default Home;
