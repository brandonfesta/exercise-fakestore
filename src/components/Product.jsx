export default function Product({product, handleAdding}){
    return(
        <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <h2>{product.price}$</h2>
            <button onClick={() => handleAdding(product.id)}>aggiungi al carrello</button>
        </div>
    )
}