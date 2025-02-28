import React, {useState} from 'react'
import products from '../../data/products'
import Cards from '../../components/common/Cards/Cards';
import Filter from '../../components/common/Filter/Filter';

const Women = () => {
  const [showProduct,setShowProduct]=useState(6);

    const loadMore=()=>{
        setShowProduct(showProduct+3);
    }
  return (
    <div className='shop-container'>
        <div className='filter-container'><Filter/></div>
        <div className='product-display-container'>
            <div className='product-display'>
            {products.filter((product) => product.category ==='woman').slice(0,showProduct).map((product)=>(
               <Cards key={product.id} product={product} />  
            ))}
           
            </div>
            {showProduct < products.length &&(       
            <button onClick={loadMore}>Load More</button>  
        )} 
        </div>
    </div>
  )
}

export default Women
