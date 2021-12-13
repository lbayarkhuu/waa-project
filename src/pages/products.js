import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
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
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    products.map(product => <ProductItem {...product} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Products;