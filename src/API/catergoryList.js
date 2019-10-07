import banner01 from '../images/img01.JPG'
import banner02  from '../images/img02.JPG'
import banner03 from '../images/img03.JPG'
import banner04 from '../images/img04.JPG'
import banner05 from '../images/img05.JPG'

export const categorylist = [
    {
        id:'01',
        img:banner01,
        title:'Conference and Event',
        shortdescription:'Constant care and attention to the patients makes good record'
    },
    {
        id:'02',
        img:banner02,
        title:'Cafe - Pub',
        shortdescription:'Constant care and attention to the patients makes good record'
    },
    {
        id:'03',
        img:banner03,
        title:'Gym - Fitness',
        shortdescription:'Constant care and attention to the patients makes good record'
    },
    {
        id:'04',
        img:banner04,
        title:'Hotels',
        shortdescription:'Constant care and attention to the patients makes good record'
    },
    {
        id:'05',
        img:banner05,
        title:'Shop - Store',
        shortdescription:'Constant care and attention to the patients makes good record'
    }
]

export const mainCategoryList = () => new Promise (res => res(categorylist));