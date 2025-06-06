import { useEffect, useState } from 'react';
import './ItemListConteiner.css'
import getProducts from '../../services/PromiseMockService';
import Loader from '../Loader/loader';
import Item from '../Item/item';
import { useParams } from 'react-router';

function ItemListConteiner(){

    const { category } = useParams()
    
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    

    const filterProducts = (arrayProducts, category)=>{
        if(category){
            setProducts(arrayProducts.filter((item)=>item.category === category))
        } else {
            setProducts(arrayProducts)
        }
    }

    useEffect(()=>{
        if(allProducts.length === 0){
            setLoading(true)
            getProducts().then((result)=>{    
                setAllProducts(result)
                filterProducts(result, category)
                setLoading(false)
            })
        } else {
            filterProducts(allProducts, category)
        }
    }, [category])

    return(
        <>
           <section className='itemConteiner'>
            {loading ? <Loader/>:
                products.length > 0 ?
                products.map((item)=>
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