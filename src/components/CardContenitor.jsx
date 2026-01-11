import Product from "./Product"

export default function CardContenitor({prodotti}){
    let products = prodotti.map(product=>(
        <Product product={product}></Product>
    ))
    return(
        <div>
            {products}
        </div>
    )
}