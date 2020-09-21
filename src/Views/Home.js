import React from 'react'
import Loader from  '../Components/Loader'
import ProductCart from  '../Components/ProductCart'
import { useAxiosGet } from '../Hooks/HttpRequests'


function Home ()
{
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

    let content = null

    let products = useAxiosGet(url)   //custom hook

    if(products.error)
    {
        content = 'Not Found'
    }

    if(products.loading)
    {
        content = <Loader></Loader>
    }

    if(products.data)
    {
        content = 
            products.data.map((product,key)=>
                <div key={product.id}>
                    <ProductCart  product={product} />
                </div>
            )
    }

    return (
        <div>
            <h1 className="font-bold text-xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home