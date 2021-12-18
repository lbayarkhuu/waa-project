import {useState} from "react";
import axios from "axios";
import _static from "../static";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: {id:null, role: ""},
        address: {
            shippingCountry: "",
            shippingAddr1: "",
            shippingAddr2: "",
            shippingZipcode: "",
            shippingCity: "",
            shippingState: ""
        },
    })
    const navigate = useNavigate()

    const submit = () => {
        if(state.password !== state.confirmPassword) alert("Password mismatch")
        else{
            axios.post(`${_static.URL}/users`, state)
                .then(res => {
                    if (state?.role?.role == "BUYER") {
                        alert("Successfully registred")

                        navigate('/login');

                        return ;
                    }

                    alert("Registered. Wait Administrator approval")
                })
                .catch(err => {
                    alert("failed to register")
                })
        }
    }

    const update = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }

    const updateAddr = (e) => {
        let temp = {...state};
        temp.address[e.target.id] = e.target.value
        setState(temp)
    }

    const updateRole = (e) => {
        let temp = {...state};
        temp.role["id"] = e.target.id;
        temp.role["role"] = e.target.value;
        setState(temp)
    }

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        submit();
    }; // your form submit function which will invoke after successful validation

    return (
        <section className="w-full mt-14 max-w-sm mx-auto overflow-hidden bg-white rounded-lg2 shadow-lg border">
            <div className="container px-5 py-6 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-bold text-center text-gray-700">User Registration</h2>

                    <p className="mt-6 mb-6 text-center text-gray-500"> You can login after admin approval </p>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Username:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Username" id="username"
                            // aria-label="Username" value={state.username} onChange={update}
                            {...register("username", {
                                onChange: (e) => {update(e)},
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.username?.type === "required" && <p className="error-p">This field is required</p>}
                        {errors?.username?.type === "maxLength" && (
                            <p className="error-p">First name cannot exceed 20 characters</p>
                        )}
                        {errors?.username?.type === "pattern" && (
                            <p className="error-p">Alphabetical characters only</p>
                        )}
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Email:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            id="email" // type="name" value={state.email}
                            placeholder="Email"
                            aria-label="email"
                           {...register("email", {
                               onChange: (e) => {update(e)},
                               required: true,
                               pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                           })}
                        />
                        {errors?.email?.type === "required" && <p className="error-p">This field is required</p>}
                        {errors?.email?.type === "pattern" && (
                            <p className="error-p">This field is email</p>
                        )}
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Role:</label>
                        <span className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                            <input type="radio" id="2" name="role" value="SELLER" className="mx-4" onChange={updateRole}/>
                            <label>SELLER</label>
                            <input type="radio" id="3" name="role" value="BUYER" className="mx-4" onChange={updateRole}/>
                            <label>BUYER</label>
                        </span>
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Country:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingCountry" placeholder="Country" // type="text"
                               {...register("shippingCountry", {
                                   onChange: (e) => {updateAddr(e)},
                                   required: true
                               })}
                               aria-label="country" // value={state.address.shippingCountry} onChange={updateAddr}
                        />
                        {errors?.shippingCountry?.type === "required" && <p className="error-p">This field is required</p>}
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Address1:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingAddr1" placeholder="Address1" // type="text"
                               {...register("shippingAddr1", {
                                   onChange: (e) => {updateAddr(e)},
                                   required: true
                               })}
                               aria-label="address1" // value={state.address.shippingAddr1} onChange={updateAddr}
                        />
                        {errors?.shippingAddr1?.type === "required" && <p className="error-p">This field is required</p>}
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Address2:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingAddr2" type="text" placeholder="Address2"
                               aria-label="address2" value={state.address.shippingAddr2} onChange={updateAddr}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">City:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingCity" type="text" placeholder="City"
                               aria-label="city" value={state.address.shippingCity} onChange={updateAddr}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">State:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingState" type="text" placeholder="State"
                               aria-label="state" value={state.address.shippingState} onChange={updateAddr}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Zipcode:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="shippingZipcode" placeholder="Zipcode" // type="text"
                               type="number"
                               {...register("shippingZipcode", {
                                   onChange: (e) => {updateAddr(e)},
                                   required: true
                               })}
                               aria-label="zipcode" //value={state.address.shippingZipcode} onChange={updateAddr}
                        />
                        {errors?.shippingZipcode?.type === "required" && <p className="error-p">This field is required</p>}
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Password:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="password" type="password" placeholder="Password"
                               aria-label="password" value={state.password} onChange={update}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label className="text-gray-600">Confirm Password:</label>
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                               id="confirmPassword" type="password" placeholder="Confirm Password"
                               aria-label="confirmPwd" value={state.confirmPassword} onChange={update}
                        />
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                            type="submit">Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserForm;