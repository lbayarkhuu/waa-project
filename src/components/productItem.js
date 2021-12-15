import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/userProvider";
import _static from "../static";

const ProductItem =  (props) => {
    const {
        id,
        name,
        price,
        photo,
        approved,
    } = props;
    const navigate = useNavigate();
    const { role } = useContext(UserContext);

    console.log(role)

    return (
        <div className="cursor-pointer" onClick={() => { navigate(`/products/${id}`) }}>
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={photo} alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover border lg:w-full lg:h-full"/>
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-lg text-gray-700"> {name} </h3> 
            <p class="text-lg font-medium text-gray-900">${price}</p>
            </div>
            {
                role != _static.BUYER &&
                <div className="flex flex-row justify-between">
                {
                    approved
                    ?
                    <div class="text-green-600 w-24 pr-4 py-2 font-semibold tracking-wide">Approved</div>
                    :
                    <div class="text-blue-400 w-24 pr-4 py-2 font-semibold tracking-wide">Pending</div>
                }
                </div>
            }
            
        </div>
    )
}

export default ProductItem;