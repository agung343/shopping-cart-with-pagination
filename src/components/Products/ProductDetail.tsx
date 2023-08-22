import CurrencyFormater from "../../utilities/CurrecyFormater"
import { UseCartContext } from "../../context/CartContext"
import classes from "./ProductDetail.module.scss"

export type Product = {
    id: number
    title: string;
    price: number;
    thumbnail:string;
    image?:string;
    quantity?: number
}

export default function ProductDetail({
    id, title, price, thumbnail
}: Product) {
    const {getItemQuantity, addItemToCart} = UseCartContext()

    const quantity = getItemQuantity(id)

    return(<>
        <div className={classes.product} key={id}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <p>Price: <CurrencyFormater amount={price} /></p>
            {quantity > 0 ? <button onClick={() => addItemToCart(id)} disabled>
                Add to Cart
            </button> : <button onClick={() => addItemToCart(id)}>
                Add to Cart
            </button>}
        </div>
    </>)
}