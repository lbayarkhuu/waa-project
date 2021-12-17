import {useLocation} from "react-router-dom"
import {useMethods} from "../../hooks/helpers";

const BuyerOrderDetail = () => {
    const {order} = useLocation();
    const {post} = useMethods();

    const changeStatus = async (status) => {
        const [err, res] = await post(`/orders/change/${order.id}`, status);
        if (err == null) alert(err);
        else {
            alert(`Status changed to ${status}`);
            window.location.reload();
        }
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 pt-24 mx-auto">
                <div className="bg-white pb-2 shadow-sm rounded-sm">
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Order No</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.id}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Seller</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.seller.name}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Total Price</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.totalPrice}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Created Date</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.createdDate}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Updated Date</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.updatedDate}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Status</div>
                                <label className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring">{order.status}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="min-w-full leading-normal">
                <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Product
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        QTY
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    order.orderLines.map(line =>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    {line.product.name}
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {line.quantity}
                                </p>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div className="container px-5 mx-auto">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center justify-center mt-4">
                        {(order.status === "ACTIVE") &&
                            <button
                                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                                type="button" onClick={()=>{changeStatus("CANCEL")}}>Cancel
                            </button>
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuyerOrderDetail;