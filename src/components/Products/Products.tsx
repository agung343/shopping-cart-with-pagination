import { useState, useEffect } from "react";
import type { Product } from "./ProductDetail";

import Loader from "../Loader/Loader";
import ProductDetail from "./ProductDetail";
import classes from "./Product.module.scss"

const API_URL = "https://dummyjson.com/products"



export interface CartProps {
    [productId: string]: Product
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchData(API_URL)
    }, [])

    async function fetchData(url:string) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                setError(true)
                setIsLoading(false)
            }
            const data = await response.json()
            setProducts(data.products)
            setIsLoading(false)
        } catch (error) {
            setError(true)
            setIsLoading(false)
        }
    }

    if (error) {
        return <h3 className={classes.error}>An error occured when fetching data.</h3>
    }

    if (isLoading) {
        return <Loader />
    }
    
    return(
        <section className={classes.productPage}>
            <h1>Products</h1>

            <div className={classes.container}>
                {products.map(p => (
                    <ProductDetail id={p.id} title={p.title} thumbnail={p.thumbnail} price={p.price} />
                ))}
            </div>
        </section>
    )
}