import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../providers/userProvider"

const Profile = () => {
    const { clear, user } = useContext(UserContext)
    const navigate = useNavigate()

    const logout = async () => {
        await clear();

        navigate('/login')
    }

    return (
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            { user && user?.username }

            <button onClick={logout} class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Logout
            </button>
        </div>
    )
}

export default Profile;