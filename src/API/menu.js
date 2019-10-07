export const menu = [
    {
        id:'01',
        title:'Home',
        link:'/'
    },
    {
        id:'02',
        title:'News',
        link:'/'
    },
    {
        id:'03',
        title:'SingUp',
        link:'/'
    },
    {
        id:'04',
        title:'Login',
        link:'/'
    }    
]

export const MenuListName = () => new Promise(res => res(menu))