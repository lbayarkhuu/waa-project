import react from 'react'

const Loading = () => {
    return (
        <div class="flex items-center justify-center space-x-2 animate-pulse mt-8">
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
    )
}

export default Loading;