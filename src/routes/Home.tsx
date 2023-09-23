import Products from "../components/Products/Products";

export default function Homepage() {
    return (
        <Products />
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    return data.products
}