import react, { useContext, useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import { useData } from '../hooks/helpers';
import { UserContext } from '../providers/userProvider';

import _static from '../static';

const Products = () => {
    const params = useParams();
    const { data: products, loading } = useData(
        `/products`
    );
    const { role } = useContext(UserContext)

    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-gray-600 font-semibold">Products</h2>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="lg:ml-40 ml-10 space-x-8">
                            {
                                role == _static.ADMIN &&
                                <a href='/products/new'>
                                    <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Product</button>
                                </a>
                            }
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