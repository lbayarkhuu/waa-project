import Loading from '../../components/loading';
import { useData } from '../../hooks/helpers';
import axios from "axios";
import _static from "../../static";

const Users = () => {
    const { data: users, loading } = useData(`/users`, []);
    const changeStatus = (uId) => {
        axios.put(`${_static.URL}/users/${uId}/changeStatus`)
            .then(res => {
                alert("user status changed")
            })
            .catch(err => {
                alert("failed to change status")
            })
        window.location.reload();
    }
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Users</h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clip-rule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
                    </div>
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
                                        Username
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map(user =>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{user.username}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{user.role.role}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {user.enabled && (
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <button className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                                                                        onClick={(u)=>{changeStatus(user.id)}}>Active</button>
                                                            </span>)}
                                                        {!user.enabled && (
                                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                                                                        onClick={(u)=>{changeStatus(user.id)}}>Inactive</button>
                                                            </span>)}
                                                    </p>
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

export default Users;