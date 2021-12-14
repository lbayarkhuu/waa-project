import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import { useData } from '../hooks/helpers';

import _static from '../static';

const Payments = () => {
    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-gray-600 font-semibold">Payments</h2>
                        </div>
                        <div class="flex items-center justify-between">
                            {/* here is payments */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;