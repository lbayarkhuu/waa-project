import react from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import Loading from '../components/loading';
import ProductItem from '../components/productItem';
import SellerItem from '../components/sellerItem';
import { useData } from '../hooks/helpers';
import { UserContext } from '../providers/userProvider';

const Sellers = () => {
    const params = useParams();
    const { data: sellers, loading } = useData(
        `/sellers`,
        []
    );
    const { role } = useContext(UserContext);
    const navigate = useNavigate()

    if (role == null) {
        navigate('/login')
    }

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