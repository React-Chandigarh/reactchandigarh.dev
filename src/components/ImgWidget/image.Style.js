export const imageStyle = {
    imageContainer: {
        backgroundImage:({item}) => item && `url(${item.img})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'280px',
        border:'#ccc solid 1px',
        width:'100%',
        display: 'flex',
        flexFlow: 'column',
        justifyItems: 'left',
        justifyContent: 'center',
        backgroundPosition:'center center',
        borderRadius:'5px 5px 0 0',
        backgroundColor:'#FFF',
        position:'relative',
        textAlign:'left'
    },
    eventContainer:{
        float:'left',
        width:'50%',
        padding:'0 20px',
        boxSizing:'border-box',
        position:'relative',
        margin:'0 0 50px 0',
        minHeight:'350px',
    },
    eventDate:{
        margin:'20px 0',
        backgroundColor:'rgba(255,255,255, 0.5)',
        padding:'5px 10px',
        position: 'absolute',
        top: '0',
        right: '0'
    },
    eventName:{
        backgroundColor:'rgba(255,255,255, 0.5)',
        padding:'5px 15px',
        position: 'absolute',
        top: '0',
        left: '0'
    },
    eventDescription: {
        padding:'5px',
        margin:'0',
        textAlign:'left',
        backgroundColor:'#CCC',
        padding:'15px'
    }
}