import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";

import CartWidget from "../CartWidget/CartWidget";
import logo from "/logo.svg"
import classes from "./Header.module.css"

export default function Header() {
    const {cartQuantity} = UseCartContext()

    useEffect(() => {
        window.addEventListener("scroll", () => shrinkHeader(), false)
        return () => {
            window.removeEventListener("scroll", () => shrinkHeader())
        }
    }, [])

    function shrinkHeader() {
        const DISTANCE_FROM_TOP = 160
        const headerElement = document.querySelector("header") as HTMLElement
        const logoElement = document.querySelectorAll("img")[0] as HTMLElement
        const cartWidgetElement = document.querySelectorAll("img")[1] as HTMLElement
        const productsCountElement = document.querySelector("span") as HTMLElement
        const scrollY = document.body.scrollTop || document.documentElement.scrollTop

        if (scrollY > DISTANCE_FROM_TOP) {
            headerElement.style.transition = "height 200ms ease-in"
            headerElement.style.height = "80px"
            logoElement.style.transition = "height 200ms ease-in"
            logoElement.style.height = "4rem"
            cartWidgetElement.style.transition = "height 200ms ease-in"
            cartWidgetElement.style.height = "2rem"
            productsCountElement.style.transition = "font-size 200ms ease-in"
            productsCountElement.style.fontSize = "1.5em"
        } else {
            headerElement.style.height = "150px"
            logoElement.style.height = "6rem"
            cartWidgetElement.style.height = "3rem"
            productsCountElement.style.fontSize = "2em" 
        }
    }

    return(<>
        <header className={classes.header}>
            <div>
                <Link to="/">
                    <img src={logo} className={classes.logo} alt="Shoppin Cart" /> 
                </Link>
            </div>
            <div>
                <CartWidget productCount={cartQuantity} />
            </div>
        </header>
    </>)
}