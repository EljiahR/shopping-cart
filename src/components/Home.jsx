import { useOutletContext } from "react-router-dom"
import Items from "./Items"
import Loading from "./Loading"

const Home = () => {
    const { inventory, isLoading, handleItemClick } = useOutletContext()
    
    return (
        <div id="home" className="grid grid-rows-2 grid-cols-1 h-full w-full items-center justify-items-center">
            <div id="hero" className="bg-white/50 backdrop-blur-sm w-96 mx-auto rounded-lg">
                <h1 className="text-4xl">Welcome to LOREM IPSUM</h1>
            </div>
            <div id="main" className="bg-white w-11/12 h-80 rounded-3xl shadow-md p-5 ">
                <h2 className="text-2xl mb-2">Trending</h2>
                <div className="bg-gray-50 flex gap-8 flex-nowrap overflow-auto" id="trending">
                    {isLoading &&
                    <Loading />
                    }
                    <Items handleItemClick={handleItemClick} imageSize={28} thisClass="bg-white w-28 h-44 shrink-0 p-2 overflow-auto border-2 rounded-lg border-black" items={inventory} />
                </div>
            </div>
        </div>
    )
    
}

export default Home