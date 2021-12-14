import _static from "../static";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../providers/userProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const { storeToken } = useContext(UserContext)
    const navigate = useNavigate()

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const submit = () => {
        axios.post(`${_static.URL}/authenticate`, {
            username,
            password,
        }).then(async res => {
            console.log(JSON.stringify(res.data.jwt))
            await storeToken(res.data.jwt, res.data.user)
            
            navigate("/profile")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div class="w-full mt-14 max-w-sm mx-auto overflow-hidden bg-white rounded-lg2 shadow-lg border">
            <div class="px-6 py-4">
                <h2 class="text-3xl font-bold text-center text-gray-700">Brand</h2>

                <h3 class="mt-1 text-xl font-medium text-center text-gray-600">Welcome Back</h3>

                <p class="mt-1 text-center text-gray-500">Login or create account</p>

                <form>
                    <div class="w-full mt-4">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address" onChange={updateUsername}/>
                    </div>

                    <div class="w-full mt-4">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" onChange={updatePassword} />
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <a href="/forget-password" class="text-sm text-gray-600 hover:text-gray-500">Forget Password?</a>

                        <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button" onClick={submit}>Login</button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50">
                <span class="text-sm text-gray-600">Don't have an account? </span>

                <a href="/register" class="mx-2 text-sm font-bold text-blue-500 hover:underline">Register</a>
            </div>
        </div>
    )
}

export default Login;