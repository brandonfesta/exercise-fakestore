import Product from "./Product"

export default function CardContenitor({prodotti, handleAdding}){
    let products = prodotti.map(product=>(
        <Product product={product} handleAdding={handleAdding} key={product.id}></Product>
    ))
    return(
        <div>
            {products}
        </div>
    )
}