import { useParams } from "react-router-dom";
import Review from "../components/review";
import axios from 'axios'
import _static from "../static";
import { useState } from "react";

const ProductForm = () => {
    const params = useParams();

    const [state, setState] = useState({
        name: "",
        photo: "",
        price: "",
    })

    const submit = () => {
        axios.post(`${_static}/products`, state)
            .then(res => {
                alert("added new product")
            })
            .catch(err => {
                alert("failed for adding product")
            })
    }

    const update = (e) => {
        console.log(e.target.id, e.target.value)
        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <section class="w-full mt-14 max-w-sm mx-auto overflow-hidden bg-white rounded-lg2 shadow-lg border">
            <div class="container px-5 py-6 mx-auto">
                <form>
                    <h2 class="text-3xl font-bold text-center text-gray-700">Register new product</h2>

                    <p class="mt-6 mb-6 text-center text-gray-500"> The product will be shown after the admin approved the request </p>

                    <div class="w-full mt-4">
                        <label className="text-gray-600">Product name:</label>
                        <input 
                            id="name" 
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" 
                            type="name" 
                            placeholder="Product name" 
                            aria-label="Product name" 
                            value={state.name}
                            onChange={update}
                        />
                    </div>
                    
                    <div class="w-full mt-4">
                        <label className="text-gray-600">Price:</label>
                        <input 
                            id="price" 
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" 
                            type="number" 
                            placeholder="price" 
                            aria-label="price" 
                            value={state.price}
                            onChange={update} />
                    </div>

                    <div class="w-full mt-4">
                        <label className="text-gray-600">Image url:</label>
                        <input 
                            id="image" 
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" 
                            type="text" 
                            placeholder="image" 
                            aria-label="image" 
                            value={state.image}
                            onChange={update}
                        />
                    </div>

                    <div class="flex items-center justify-center mt-4">
                        <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button" onClick={submit}>Send Request</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ProductForm;