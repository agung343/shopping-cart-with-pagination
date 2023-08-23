import { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import ReactPaginate from "react-paginate";
import type { Product } from "./ProductDetail";

import ProductDetail from "./ProductDetail";
import classes from "./Product.module.scss"


export default function Products() {
    const allProducts = useLoaderData() as Product[]

    //pagination-setup
    const itemsPerPage:number = 9
    const [pageCount, setPageCount] = useState<number>(1)

    const paginatedProducts = useMemo(() => {
        const firstIndex = (pageCount - 1) * itemsPerPage
        const lastIndex = firstIndex + itemsPerPage
        return allProducts.slice(firstIndex, lastIndex)
    }, [allProducts, pageCount])

    function handlePageCount(event: {selected: number}) {
        const newPage = event.selected + 1
        console.log(`User requested page number ${event.selected}, which is offset ${newPage}`)
        setPageCount(newPage)
    }

    return(
        <section className={classes.productPage}>
           {allProducts.length > 0 ? (<>
             <h1>Products</h1>

             <div className={classes.container}>
                 {paginatedProducts.map(p => (
                     <ProductDetail key={p.id} id={p.id} title={p.title} thumbnail={p.thumbnail} price={p.price} />
                 ))}
                 <ReactPaginate 
                    pageCount={Math.ceil(allProducts.length / itemsPerPage)}
                    nextLabel="next >" previousLabel="< previous"
                    onPageChange={handlePageCount}
                    pageRangeDisplayed={3} marginPagesDisplayed={2}
                    pageClassName="page-item" pageLinkClassName="page-link"
                    previousClassName="page-item" previousLinkClassName="page-link"
                    nextClassName="page-item" nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                 />
             </div>
           </>): (
            <div className={classes.container}>
                <p>Error occured when fetching products</p>
            </div>
           )}
        </section>
    )
}

