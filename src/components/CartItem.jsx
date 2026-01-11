export default function CartItem({item, removeItem}){
    return (
        <div className="cart-item">
            <h4>{item.title}</h4>
            <img src={item.image} alt="" />
            <h5>{item.price}</h5>
            <button onClick={() => removeItem(item.id)}>Remove item</button>
        </div>
    )
}