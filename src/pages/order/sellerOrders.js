import {useContext} from 'react'
import OrderItem from '../../components/orderItem';
import { useData } from '../../hooks/helpers';
import Loading from '../../components/loading'
import {UserContext} from "../../providers/userProvider";
import {useNavigate} from "react-router-dom";

const SellerOrders = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const { data: orders, loading } = useData(
        `/orders/seller/${user?.id}`,
        []
    );

    const orderDetail = (order) => {
      navigate("/s-order-detail", {order});
    }

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className=" flex items-center justify-between pb-6">
				<div>
					<h2 className="text-gray-600 font-semibold">Orders</h2>
				</div>
            </div>
            <div>
			    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    {
                        loading && <Loading />
                    }
                    {
                        !loading &&
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order No
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Buyer
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Seller
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Total price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <OrderItem order={order} orderDetail={(order)=>orderDetail}/>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
			</div>
		    </div>
	    </div>
    )
}

export default SellerOrders;