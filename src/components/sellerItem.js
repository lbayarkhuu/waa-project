import { useNavigate } from "react-router-dom";

const SellerItem =  (props) => {
    const {
        id,
        name,
        contact,
        photo,
    } = props;

    const navigate = useNavigate();

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => { navigate(`/sellers/${id}/products`) }}>
            <img class="w-full" src={photo} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{contact}</span>
            </div>
        </div>  
    );
}

export default SellerItem;