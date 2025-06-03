import { useEffect, useState } from 'react';
import './ItemListConteiner.css'
import getProducts from '../../services/PromiseMockService';
import Loader from '../Loader/loader';
import Item from '../Item/item';

function ItemListConteiner(props){
    
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(allProducts.length === 0){
            setLoading(true)
            getProducts().then((result)=>{
                console.log(result);
                
                setAllProducts(result)
                setLoading(false)
            })
        }
    }, [])

    return(
        <>
           <section className='itemConteiner'>
            {loading ? <Loader/>:
                allProducts.length > 0 ?
                allProducts.map((item)=>
                    <Item key={item.id} {...item} />
                )
                :
                <label> Productos no encontrados</label> 
            }                 
           </section>
                
        </>
    )
}

export default ItemListConteiner;