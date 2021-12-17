import {useLocation} from "react-router-dom"
import {useMethods} from "../../hooks/helpers";
import {useEffect, useState} from "react";

const BuyerOrderDetail = () => {
    const {state} = useLocation();
    const [order, setOrder] = useState({
        id: null,
        seller: {},
        totalPrice: null,
        createDate: null,
        updatedDate: null,
        status: "",
        orderLines: []
    });
    const {put, get} = useMethods();

    const changeStatus = async (status) => {
        const [err, res] = await put(`/orders/change/${state.id}?status=${status}`);
        if (res !== null){
            alert(`Status changed to ${status}`);
            window.location.reload();
        }
        else {alert(err);
        }
    }
    useEffect(async () => {
        const [err, res] = await get(`/orders/${state.id}`);
        if (res !== null){
            setOrder(res);
        }else{
            alert(err);
        }
    }, [])

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 pt-24 mx-auto">
                <div className="bg-white pb-2 shadow-sm rounded-sm">
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Order No</div>
                                <label className="px-4 py-2">{order.id}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Seller</div>
                                <label className="px-4 py-2">{order.seller.username}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Total Price</div>
                                <label className="px-4 py-2">{order.totalPrice}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Created Date</div>
                                <label className="px-4 py-2">{new Date(order.createdDate).toLocaleString()}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Updated Date</div>
                                <label className="px-4 py-2">{new Date(order.updatedDate).toLocaleString()}</label>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Status</div>
                                <label className="px-4 py-2">{order.status}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-5 pt-4 mx-auto">
                <div className="bg-white pb-2 shadow-sm rounded-sm">
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
                        <tr key={line.id}>
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
                </div>
            </div>
            <div className="container px-5 mx-auto">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center justify-center mt-4">
                        {(order.status === "ACTIVE") &&
                            <button
                                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                                type="button" onClick={()=>{changeStatus("CANCELED")}}>Cancel
                            </button>
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuyerOrderDetail;