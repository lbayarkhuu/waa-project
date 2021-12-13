import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import { useData } from '../hooks/helpers';

import _static from '../static';

const Products = () => {
    const params = useParams();
    const { data: products, loading } = useData(
        `/sellers/${params?.sellerId}/products`,
        [
            {
                id: 1,
                sellerId: 1,
                price: 1000,
                name: "Basic Tee #1",
            },
            {
                id: 2,
                sellerId: 1,
                price: 1000,
                name: "Basic Tee #2",
            },
            {
                id: 3,
                sellerId: 1,
                price: 1000,
                name: "Basic Tee #3",
            },
            {
                id: 4,
                sellerId: 1,
                price: 1000,
                name: "Basic Tee #4",
            }
        ]
    );

    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-gray-600 font-semibold">Products</h2>
                        </div>
                        <div class="flex items-center justify-between">
                            {/* <div class="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
                            </div> */}
                            <div class="lg:ml-40 ml-10 space-x-8">
                                <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Product</button>
                            </div>
                        </div>
                    </div>
                </div>


                {
					loading && <Loading />
				}
                {
					!loading && 
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products.map(product => <ProductItem {...product} />)
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default Products;