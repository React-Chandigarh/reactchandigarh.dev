import React, {useState, useEffect} from 'react';
import { allEventList } from './eventList'
import { EventWidget } from '../ImgWidget'
import withStyle from 'react-jss'

const eventStyle = {
    eventContainer:{
        maxWidth:'1500px',
        width:'100%',
        margin:'0 auto',
    }
}

const Events = ({classes}) => {
    const [event, setEvent] = useState([]);
    useEffect(()=> {
        allEventList().then(data => setEvent(data))
    })

    return(
        <div className={classes.eventContainer}>
            {
                event && event.map(events => (
                <EventWidget
                    key={events.id}
                    item={events}
                    />
                ))
            }
        </div>
    )
}
    // <div className="pastEvents">
    //     <h3>Past Events</h3>
    //     <ul className="pastEvents__list">
    //         <li>
    //             <div>
    //                 <h4>13 Oct 2019</h4>
    //                 <a href="https://www.meetup.com/Chandigarh-React-Developers/">8th ReactJs Meetup</a>
    //             </div>
    //         </li>
    //         <li>
    //             <div>
    //                 <h4>05 Oct 2019</h4>
    //                 <a href="https://www.meetup.com/Chandigarh-React-Developers/">2nd ReactJs Workshop</a>
    //             </div>
    //         </li>
    //         <li>
    //             <div>
    //                 <h4>24 Sep 2019</h4>
    //                 <a href="https://www.meetup.com/Chandigarh-React-Developers/">7th ReactJs Meetup</a>
    //             </div>
    //         </li>
    //         <li>
    //             <div>
    //                 <h4>31 Aug 2019</h4>
    //                 <a href="https://www.meetup.com/Chandigarh-React-Developers/">1st ReactJs Workshop</a>
    //             </div>
    //         </li>
    //     </ul>
    // </div>


export default withStyle(eventStyle)(Events);
