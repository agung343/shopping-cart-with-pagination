import { Outlet } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import CartProvider from "../context/CartContext"

export default function RootLayout() {
    return(<>
    <CartProvider>
        <Header  />
            <Outlet />
        <Footer />
    </CartProvider>
       
    </>)
}