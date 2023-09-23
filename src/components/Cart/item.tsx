import { useLoaderData } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";
import type { Product } from "../Products/ProductDetail";
import CurrencyFormater from "../../utilities/CurrecyFormater";

import classes from "./item.module.scss"

interface Props {
    id: number
    quantity: number
}

export default function Item({id, quantity}: Props) {
    const products = useLoaderData() as Product[]
    
    const product = products.find(p => p.id === id)
    if (product === null) {
        return null
    }

    const totalPrice: number = product?.price * quantity

    const {getItemQuantity, addItemToCart, removeFromCart} = UseCartContext()

    const quantityProduct = getItemQuantity(id)

    return(<>
        <div className={classes.product}>
            <img src={product?.thumbnail} alt={product?.title} />
            <h3>{product?.title}</h3>
            <div className={classes.quantifier}>
                <input type="button" value="+" className={classes.buttonMinus} onClick={() => addItemToCart(id)} />
                <span>{quantityProduct}</span>
                <input type="button" value="-" className={classes.buttonPlus} onClick={() => removeFromCart(id)} />
            </div>
            <div className={classes.totalPrice}>
                Total: <CurrencyFormater amount={totalPrice} />
            </div>
        </div>
    </>)
}