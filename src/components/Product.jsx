export default function Product({product}){
    return(
        <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <h2>{product.price}$</h2>
        </div>
    )
}