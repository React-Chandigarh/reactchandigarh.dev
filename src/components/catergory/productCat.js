import React, { useState, useEffect } from 'react'
import { mainCategoryList } from './../../API/catergoryList'
import { CatStyle } from './Cat.Style'
import withStyle from 'react-jss'
import { ImageGrid } from '../imgGrid'


const Catergory = ({classes}) => {
    const [category, setCategory] = useState([]);
    useEffect(()=> {
        mainCategoryList().then(data => setCategory(data))
    })
    
    return (
        <React.Fragment>
            <h2>Featured Categories</h2>
            <span>Explore some of the best tips from around the city from our partners and friends.</span>
            {category && category.map(mainCate => (
                <ImageGrid
                    key={mainCate.id}
                    item={mainCate}
                    catImage={mainCate.img}
                />
            ))}
        </React.Fragment>
    )
}

export default withStyle(CatStyle)(Catergory);