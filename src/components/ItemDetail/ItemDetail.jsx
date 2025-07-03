import { useParams } from "react-router";
import "./ItemDetail.css"
import { useEffect, useState } from "react";
import getProducts from "../../services/PromiseMockService";
import Loader from "../Loader/loader";
import Counter from "../Counter/Counter";
import { Link } from "react-router";
import { useAppContext } from "../../context/context";

function ItemDetail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0)
    const [producto, setProducto] = useState({});

    const {addToCart} = useAppContext()

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((result)=>{
            const product = result.find(item=>item.id === id)
            setProducto(product)
            setLoading(false)
        }).catch((err) => { alert(err) })
    },[id])

    return(
            loading ? <Loader className="loader"/> :
            <div className="detailConteiner">
                
                <div className="textImg">
                    <div className="imgConteiner">
                        <img src={producto.img} />
                    </div>
                    <div className="text">
                        <label className="detail-title">{producto.title}</label>
                        
                        <label className="detail-price">${producto.price}</label>
                        <div className="botones">
                            <Counter stock={producto.stock} counter={counter} setCounter={setCounter} />
                            <button className="button-default"
                            onClick={() => addToCart({id:producto.id, title:producto.title, quantity:counter})}
                            >Agregar al carrito</button>
                        </div>
                         <label>Unidades restantes: {producto.stock}</label>
                    </div>
                </div>
                <p>{producto.text}</p>
                <button className="button-default"><Link to="/products" className="nav-link">Volver</Link></button>
                
            </div>
        
    )
}

export default ItemDetail;