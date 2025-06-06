import { useEffect, useState } from 'react';
import './ItemListConteiner.css'
import getProducts from '../../services/PromiseMockService';
import Loader from '../Loader/loader';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';

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
                <ItemList products={products} />
            }                 
           </section>
                
        </>
    )
}

export default ItemListConteiner;