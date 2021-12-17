import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/userProvider";
import axios from "axios";
import { useMethods } from "../hooks/helpers";

const SellerItem = (props) => {
    const {
        id,
        name,
        contact,
        photo,
        following
    } = props;

    const navigate = useNavigate();
    const { post } = useMethods();

    const openDetail = () => {
        navigate(`/sellers/${id}/products`)
    }

    const follow = () => {
        post(`/sellers/${id}/follow`).then(res => { window.location.reload() })
    }

    const unfollow = () => {
        post(`/sellers/${id}/unfollow`).then(res => { window.location.reload() })
    }

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg" >
            <img src={photo} className="cursor-pointer w-full h-40" alt="Sunset in the mountains" onClick={follow} />
            <div class="px-6 py-4 cursor-pointer" onClick={openDetail}>
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{contact}</span>
            </div>
            {
                following
                    ?

                    <button class="ml-5 mb-4 text-green-600 w-24 pr-4 py-2 font-semibold tracking-wide" onClick={unfollow} > Following </button>
                    :
                    <button class="ml-5 mb-4 text-blue-400 w-24 pr-4 py-2 font-semibold tracking-wide" onClick={follow} > Follow </button>
            }
        </div>
    );
}

export default SellerItem;