import { useState } from "react"
import CartItem from "./CartItem"

export default function Carrello({cart, removeItem}){
    const [open, setOpen] = useState(false)
    let products = cart.map(item => (
        <CartItem item={item} removeItem={removeItem}></CartItem>
    ))
    function openCart(){
        if(open){
            setOpen(false)
        } else{
            setOpen(true)
        }
    }
    return (
        <div>
            <button onClick={() => openCart()}>Carrello</button>
            <div className={open ? "cart-container" : "cart-close"}>
                {products}
            </div>
        </div>
    )
}