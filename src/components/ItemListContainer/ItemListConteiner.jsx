import { useEffect, useState } from 'react';
import './ItemListConteiner.css'

import Loader from '../Loader/loader';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/firebaseService';

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
            getProducts()
            .then((result)=>{    
                const productos = result.docs.map(el=>el.data())
                console.log(productos);
                
                setAllProducts(productos)
                filterProducts(productos, category)
                setLoading(false)
            })
            .catch(()=>alert("Error al cargar productos"))

            
        } else {
            filterProducts(allProducts, category)
        }
    }, [allProducts,category])

    return(
        <>
           <section className='itemConteiner'>
            {loading ? <Loader/>:
                <>
                    <ul className='itemConteinerSideBar'>
                        <li className='navbarLi'><Link to="/products" className='linkSidebar'>Todos los productos</Link></li>
                        <li className='navbarLi'><Link to="/products/category/plantas_de_interior" className='linkSidebar'>Plantas de interior</Link></li>
                        <li className='navbarLi'><Link to="/products/category/cactus_y_crasas" className='linkSidebar'>Cactus y crasas</Link></li>
                    </ul>
                    <div className='itemConteinerList'><ItemList  products={products} /></div>
                    
                </>
            }                 
           </section>
                
        </>
    )
}

export default ItemListConteiner;