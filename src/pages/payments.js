import react, { useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom';
import Loading from '../components/loading';
import PaymentItem from '../components/paymentItems';
import ProductItem from '../components/productItem';
import { useData } from '../hooks/helpers';

import _static from '../static';

const Payments = () => {

    const [orderState, setOrderState] = useState([
        { OrderId: 1, Price: '1000', Status: 'Active', Date: '11/18/2021' },
        { OrderId: 2, Price: '850', Status: 'Active', Date: '12/25/2021' },
        { OrderId: 3, Price: '2000', Status: 'Active', Date: '11/25/2021' }
    ]);


    return (
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
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

                                <div>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    </tbody>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;