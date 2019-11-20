import React from 'react';

const Events = () => (
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
);

export default Events;
