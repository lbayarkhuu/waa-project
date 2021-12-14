import { UserContext } from "../providers/userProvider";
import { useContext} from "react"
import _static from "../static";

const Header = () => {
    const { role } = useContext(UserContext)

    return (
        <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                        </a>
                    </div>
                    <nav class="flex space-x-10">
                        <a href="/sellers" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Sellers
                        </a>

                        <a href="/products" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Products
                        </a>

                        <a href="/cart" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Cart
                        </a>
                        
                        <a href="/orders" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Orders
                        </a>

                        <a href="/profile" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Profile
                        </a>

                        <a href="/payments" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Payments
                        </a>

                        <a href="/login" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in / Sign up
                        </a>

                        {
                            role == _static.ADMIN &&

                            <a href="/users" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Users
                            </a>
                        }
                        <a href="/reviews" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Reviews
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;