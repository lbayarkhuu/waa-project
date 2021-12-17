import Loading from "../components/loading";
import {useData} from "../hooks/helpers";
import axios from "axios";
import _static from "../static";

const Reviews = () => {
    const { data: reviews, loading } = useData(`/reviews`, []);
    const changeStatus = (rId) => {
        axios.put(`${_static.URL}/reviews/${rId}`)
            .then(res => {
                alert("approved")
            })
            .catch(err => {
                alert("failed")
            })
        window.location.reload();
    }

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Reviews</h2>
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
                                        Product
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Rate
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Message
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review =>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{review.product.name}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{review.user.username}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{review.rate}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{review.message}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {review.approved && (
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    Approved</span>)}
                                                        {!review.approved && (
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                Not Approved</span>)}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {!review.approved && (
                                                    <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                                                            onClick={(u)=>{changeStatus(review.id)}}>approve</button>)}
                                                </td>
                                            </tr>
                                        )
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

export default Reviews;