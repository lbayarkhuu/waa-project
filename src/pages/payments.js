import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import PaymentItem from '../components/paymentItems';
import ProductItem from '../components/productItem';
import { useData } from '../hooks/helpers';

import _static from '../static';

const Payments = () => {
    const [payments, setPayments] = useState([
        { id: 1, price: '1000', status: 'Active', date: '11/18/2021' },
        { id: 2, price: '850', status: 'Active', date: '12/25/2021' },
        { id: 3, price: '2000', status: 'Active', date: '11/25/2021' }
    ]);

    return (
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden w-full border-b border-gray-200 sm:rounded-lg">
                            <table class="divide-y w-full divide-gray-200">
                                <thead class="bg-gray-50 w-full">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {
                                        payments.map(payment => <PaymentItem {...payment} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;