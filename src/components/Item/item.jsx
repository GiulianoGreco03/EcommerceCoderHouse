import  './item.css'
import { Link } from 'react-router'

function Item({id, title, price, img, stock}){
    return (
        <div className='conteiner'>
            <div className='imageConteiner'>
                <img src={img} />
            </div>
            <h3>{title}</h3>
            <label>${price}</label>
            <label>Cantidad disponible: {stock}</label>
            <Link to={`/products/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item