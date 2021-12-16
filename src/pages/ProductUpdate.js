import { useNavigate, useParams} from "react-router-dom";
import axios from 'axios'
import _static from "../static";
import { useContext, useEffect, useState } from "react";
import { postData, useMethods } from "../hooks/helpers";
import { UserContext } from "../providers/userProvider";

const ProductUpdate = () => {
    const params = useParams();
    const { put, get } = useMethods();
    const navigat = useNavigate()
    const { user, token } = useContext(UserContext)
    
    const [state, setState] = useState({
        name: "",
        price: "",
        photo: "",
        description: "",
    })
    const [required, setRequired] = useState(false)
    const navigate = useNavigate()

    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }

    const fetch = async () => {
        const [err, res] = await get(`/products/${params?.productId}`)

        if (err) return ;

        setState(res);
    }

    useEffect(() => {
        fetch()
    }, [params?.productId, token])

    const submit = async () => {
        if (
            state?.name.length == 0 ||
            state?.price <= 0 ||
            state?.photo.length == 0 ||
            state?.description.length == 0 ||
            !validateUrl(state?.photo)
        ) {
            setRequired(true);

            return
        }

        setRequired(false);

        const [res, err] = await put(`/products/${params?.productId}`, state);

        if (err == null) alert(err);
        else {
            alert("Successfully updated");

            setTimeout(() => {
                navigate(`/products/${params?.productId}`)
            }, 1000)
        }
    }

    const update = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <section class="w-full mt-14 max-w-sm mx-auto overflow-hidden bg-white rounded-lg2 shadow-lg border">
            <div class="container px-5 py-6 mx-auto">
                <form>
                    <h2 class="text-3xl font-bold text-center text-gray-700">Update product</h2>

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
                            id="photo" 
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" 
                            type="text" 
                            placeholder="photo" 
                            aria-label="photo" 
                            value={state.photo}
                            onChange={update}
                        />
                    </div>

                    <div class="w-full mt-4">
                        <label className="text-gray-600">Detail:</label>
                        <textarea 
                            id="description" 
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring" 
                            placeholder="description" 
                            aria-label="description" 
                            value={state.description}
                            onChange={update}
                        />
                    </div>

                    {
                        required &&
                        <label className="text-red-500"> Please fill all fields </label>
                    }

                    <div class="flex items-center justify-center mt-4">
                        <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button" onClick={submit}>Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ProductUpdate;