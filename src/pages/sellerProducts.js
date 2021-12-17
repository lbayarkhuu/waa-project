import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import SellerItem from '../components/sellerItem';
import { useData } from '../hooks/helpers';

import _static from '../static';

const SellerProducts = () => {
    const params = useParams();

    const { data: seller, loadingSeller } = useData(
        `/sellers/${params?.sellerId}`,
        {}
    )

    const { data: products, loading } = useData(
        `/sellers/${params?.sellerId}/products`, []
    );

    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                {
                    loadingSeller && <Loading/>
                }
                {
                    !loadingSeller &&
                    <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold text-white sm:text-gray-900 md:text-2xl">{seller?.name}</h1>
                        </div>
                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <img src={seller?.photo} alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
                        </div>
                        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                        <dt class="sr-only">Location</dt>
                        <dd class="flex items-center">
                            <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="-ml-2 text-gray-300">
                            <circle cx="1" cy="1" r="1" />
                            </svg>
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1" aria-hidden="true">
                            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            {seller?.location}
                        </dd>
                        </dl>
                        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                        <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">{seller?.contact}</button>
                        </div>
                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
                            {seller?.description}    
                        </p>
                    </div>
                    </main>
                }
                

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
                                <a href='/products/new'>
                                    <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Product</button>
                                </a>
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

export default SellerProducts;