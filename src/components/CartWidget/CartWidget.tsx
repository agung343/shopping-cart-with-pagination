import { useNavigate } from "react-router-dom";

import classes from "./CartWidget.module.scss"
import shoppingCart from "../../assets/shopping-cart.svg"

interface Props {
    productCount: number
}

export default function CartWidget({productCount}: Props) {
    const navigate = useNavigate()

    function navigateToCart() {
        navigate("/cart")
    }
    return(<>
        <button className={classes.container} onClick={navigateToCart}>
            <span className={classes.productCount}>
                {productCount}
            </span>
            <img src={shoppingCart} className={classes.shoppingCart} alt="Go to Cart" />
        </button>
    </>)
}