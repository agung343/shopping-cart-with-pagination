import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { UseCartContext } from "../../context/CartContext";
import Item from "./item";
import classes from "./Cart.module.scss"

export default function Cart() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])

    const {cartItems} = UseCartContext()
    return(<>
        <section className={classes.cart}>
            <h1>Cart</h1>
            <div className={classes.container}>
                {cartItems.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </section>
    </>)
}