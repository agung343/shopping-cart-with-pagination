import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

//pages
import RootLayout from "./routes/RootLayout"
import Homepage, {loader as loadProducts} from './routes/Home';
import CartPage from './routes/Cart'

const router = createBrowserRouter([
  {path:"/", element: <RootLayout />, children: [
    {path:"/", element: <Homepage />, loader: loadProducts},
    {path: "/cart", element: <CartPage />, loader: loadProducts}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
