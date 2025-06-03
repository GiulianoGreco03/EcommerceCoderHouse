import  './item.css'

function Item({title, price, img, stock, category}){
    return (
        <div className='conteiner'>
            <div className='imageConteiner'>
                <img src={img} />
            </div>
            <h3>{title}</h3>
            <label>${price}</label>
            <label>Stock: {stock}</label>
            <label>Categoria: {category}</label>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item