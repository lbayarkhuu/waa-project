import axios from "axios";
import { useParams } from "react-router-dom"
import { useContext, useState } from "react/cjs/react.development";
import { useData, useMethods } from "../hooks/helpers"
import { UserContext } from "../providers/userProvider";

const CommendItem = (props) => {
    console.log(props)

    return (
        <div className="flex items-center mt-3">
            <div className="h-8 w-8 rounded-full bg-purple-700 flex justify-center items-center">
                <span className="text-white align-middle">{props?.user?.username.slice(0, 1).toUpperCase()}</span>
            </div>
            <div className="text-base ml-2">
                {props?.message}
            </div>

            <div className="text-base ml-2 text-green-500">
                {
                    props?.approved ?
                    "approved" : "pending review"
                }
            </div>
        </div>
    )
} 

const CommendList = (props) => {
    const { productId } = useParams()
    const { post } = useMethods();

    const { data: commends, loading } = useData(`/reviews/product/${productId}`, []);

    const [value, setValue] = useState("");
    const { user } = useContext(UserContext);

    const update = (e) => {
        setValue(e.target.value);
    }

    const submit = async () => {
        await post(`/reviews/product/${productId}`, { 
            body: value
        })
        
        alert("Admin review the commend");

        setValue("")
    }

    return (
        <div className="flex flex-col mt-8">
            <h2 className="text-xl font-medium text-purple-500 mb-2">Product reviews</h2>
            {
                commends.map(commend => (<CommendItem {...commend}/>))
            }
            {
                commends?.length == 0 &&
                <h3 className="text-base font-medium text-gray-500 mt-2"> There is no reviews yet </h3>
            }
            <div className="flex flex-col">
                <h2 className="text-xl font-medium text-purple-500 mb-2 mt-10">Please review our product</h2>

                <textarea value={value} onChange={update} className="border border-gray-500 mb-4" placeholder="Please write commend in here"/>

                <button onClick={submit} class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">Submit Review</button>
            </div>
        </div>
    )
}

export default CommendList;