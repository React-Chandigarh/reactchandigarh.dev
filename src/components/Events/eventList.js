import event01 from '../../images/event01.JPG'
import event02 from '../../images/event02.JPG'
import event03 from '../../images/event03.JPG'
import event04 from '../../images/event07.JPG'

export const eventList = [
    {
        id:'01',
        img:event01,
        eventDate:'31 Aug 2019',
        eventDescription:'demo text here demo text here demo text here demo text here demo text here demo text here demo text here demo text here',
        eventName:'1st ReactJS Workshop',
        eventLink:'https://www.meetup.com/Chandigarh-React-Developers/'
    },
    {
        id:'02',
        img:event02,
        eventDate:'24 Sep 2019',
        eventDescription:'demo text here demo text here demo text here demo text here demo text here demo text',
        eventName:'7th ReactJS Meetup',
        eventLink:'https://www.meetup.com/Chandigarh-React-Developers/'
    },
    {
        id:'03',
        img:event03,
        eventDate:'05 Oct 2019',
        eventDescription:'demo text here demo text here demo text here demo text here demo text here demo text here demo text here demo text here',
        eventName:'2nd ReactJS Workshop',
        eventLink:'https://www.meetup.com/Chandigarh-React-Developers/'
    },
    {
        id:'04',
        img:event04,
        eventDate:'13 Oct 2019',
        eventDescription:'demo text here demo text here demo text here demo text here demo text here demo text here demo',
        eventName:'8th ReactJs Meetup',
        eventLink:'https://www.meetup.com/Chandigarh-React-Developers/'
    }
]

export const allEventList = () => new Promise (res => res (eventList));