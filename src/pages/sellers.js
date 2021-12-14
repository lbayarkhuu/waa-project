import react from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import SellerItem from '../components/sellerItem';
import { useData } from '../hooks/helpers';

const Sellers = () => {
    const params = useParams();
    const { data: sellers, loading } = useData(
        `/sellers`,
        [
            {
                id: 1,
                contact: "+1 (641)-123-1212",
                name: "Basic Tee #1",
                address: "Collingwood, Ontario",
                photo: "https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
            },
            {
                id: 2,
                contact: "+1 (641)-123-1212",
                name: "Basic Tee #2",
                address: "Collingwood, Ontario",
                photo: "https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
            },
            {
                id: 3,
                contact: "+1 (641)-123-1212",
                name: "Basic Tee #3",
                address: "Collingwood, Ontario",
                photo: "https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
            },
            {
                id: 4,
                contact: "+1 (641)-123-1212",
                name: "Basic Tee #4",
                address: "Collingwood, Ontario",
                photo: "https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
            }
        ]
    );

    return (
        <div class="bg-gray">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-gray-600 font-semibold">Sellers</h2>
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
                        sellers.map(seller => <SellerItem {...seller} />)
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default Sellers;