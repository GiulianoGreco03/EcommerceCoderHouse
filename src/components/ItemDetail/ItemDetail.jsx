import { useParams } from "react-router";
import "./ItemDetail.css"
import { useEffect, useState } from "react";
import getProducts from "../../services/PromiseMockService";
import Loader from "../Loader/loader";
import Counter from "../Counter/Counter";
import { Link } from "react-router";

function ItemDetail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((result)=>{
            const product = result.find(item=>item.id === id)
            setProducto(product)
            setLoading(false)
        }).catch((err) => { alert(err) })
    },[])

    return(
            loading ? <Loader/> :
            <div className="detailConteiner">
                
                <div className="textImg">
                    <div className="imgConteiner">
                        <img src={producto.img} />
                    </div>
                    <div className="text">
                        <h2>{producto.title}</h2>
                        
                        <label>${producto.price}</label>
                        <label>Unidades restantes: {producto.stock}</label>
                        <div className="botones">
                            <Counter/>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                    
                </div>
                <p>{producto.text}</p>
                <button><Link to="/products" className="nav-link">Volver</Link></button>
                
            </div>
        
    )
}

export default ItemDetail;