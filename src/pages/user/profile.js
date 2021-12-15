import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/userProvider"
import Review from "../../components/review";
import axios from "axios";
import _static from "../../static";
import {useData, useMethods} from "../../hooks/helpers";

const Profile = () => {
    const { clear, user } = useContext(UserContext)
    const { get } = useMethods();

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        address: {},
    })

    const fetch =  async () => {
        const [err, res] = await get(`/users/${user?.id}`);
        if (res) {
            setState({
                id: res?.id,
                username: res?.username,
                email: res?.email,
                password: res?.password,
                address: res?.address ? res?.address :{},
                role: res?.role,
            })
        } else {
            console.log(err)
        }
    }

    useEffect(() => {
        if (Object.keys(user).length == 0) return;
        fetch()
    }, [user])

    const onChangeHandle = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }

    const onChangeAddress = (e) => {
        let temp = {...state};
        temp.address[e.target.id] = e.target.value
        setState(temp)
    }

    const save = () => {
        axios.put(`${_static.URL}/users`, state)
                .then(res => {
                    alert("Saved")
                })
                .catch(err => {
                    alert("failed to save")
                })
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 pt-24 mx-auto">
            <div className="bg-white pb-2 shadow-sm rounded-sm">
                <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Username</div>
                            <input onChange={onChangeHandle} id="username" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state.username}/>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <input onChange={onChangeHandle} id="email" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state.email}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="container px-5 mx-auto">
                <div className="bg-white pb-2 shadow-sm rounded-sm">
                    <h2 className="py-4">Shipping Address</h2>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Country</div>
                                <input onChange={onChangeAddress} id="shippingCountry" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingCountry}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address1</div>
                                <input onChange={onChangeAddress} id="shippingAddr1" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingAddr1}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address2</div>
                                <input onChange={onChangeAddress} id="shippingAddr2" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingAddr2}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">City</div>
                                <input onChange={onChangeAddress} id="shippingCity" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingCity}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">State</div>
                                <input onChange={onChangeAddress} id="shippingState" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingState}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Zipcode</div>
                                <input onChange={onChangeAddress} id="shippingZipcode" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.shippingZipcode}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5 mx-auto">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <h2 className="pb-4">Billing Address</h2>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Country</div>
                                <input onChange={onChangeAddress} id="billingCountry" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingCountry}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address1</div>
                                <input onChange={onChangeAddress} id="billingAddr1" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingAddr1}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address2</div>
                                <input onChange={onChangeAddress} id="billingAddr2" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingAddr2}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">City</div>
                                <input onChange={onChangeAddress} id="billingCity" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingCity}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">State</div>
                                <input onChange={onChangeAddress} id="billingState" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingState}/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Zipcode</div>
                                <input onChange={onChangeAddress} id="billingZipcode" className="px-4 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" value={state?.address?.billingZipcode}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                            type="button" onClick={save}>Save
                        </button>
                    </div>
                </div>
            </div>

        </section>
        //
        // <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        //     { user && user?.username }
        //
        //     <button onClick={logout} class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
        //         Logout
        //     </button>
        // </div>
    )
}

export default Profile;