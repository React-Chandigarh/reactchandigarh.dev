export const CatStyle = {    
    catContainer:{                
        backgroundImage: ({item}) => item && `url(${item.img})`,
        backgroundSize: 'cover',
        minHeight: '250px',
    }
}