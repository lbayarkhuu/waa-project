import { useParams } from "react-router-dom";
import Review from "../components/review";
import { useData } from "../hooks/helpers";
import axios from 'axios'
import _static from "../static";

const ProductDetail = () => {
    const params = useParams();
    const { data: product, loading } = useData(
        `/products/${params?.productId}`,
        {
            id: 1,
            sellerId: 1,
            price: 1000,
            name: "The Catcher in the Rye",
            description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
        }
    );

    const submit = () => {
        axios.post(`${_static}/card/add`, {
            productId: params?.productId,
        }).then(res => {
            alert("added new product")
        }).catch(err => {
            alert("failed for adding product")
        })
    }

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"/>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>
                    <div class="flex mb-4">
                    <Review stars={4}/>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        </a>
                    </span>
                    </div>
                    <p class="leading-relaxed">{product?.description}</p>
                    <div class="flex mt-4 border-t-2 pt-4">
                        <span class="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={submit}>Add to card</button>
                        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}

export default ProductDetail;