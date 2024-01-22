import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import ExpandedItem from "./ExpandedItem"
import Items from "./Items"
import Loading from "./Loading"

const Shopping = () => {
    const { inventory, isLoading, getInventory, handleItemClick } = useOutletContext()
    
    //this is NOT done
    const itemExpand = (e, expand, item = null) => {
        const itemDiv = document.getElementById("expanded-item")
        const itemImage = document.getElementById("expanded-item-image")
        if(expand){
            itemDiv.classList.remove("hidden")
            itemDiv.style.left = `${e.pageX + 10}px`
            itemDiv.style.top = `${e.pageY - 300}px`
            itemImage.src = item.image
        } else {
            itemDiv.classList.add("hidden")
        }
    }
    
    useEffect(()=>{
        getInventory()
    })
    
    return (
        <>
        <div id="shop-div" className="m-20">
            <div className="bg-gray-50 grid grid-cols-5 grid-rows-4 gap-10 p-5 rounded-lg" id="trending">
                {isLoading &&
                <Loading />
                }
                <Items handleItemClick={handleItemClick} itemExpand={itemExpand} imageSize={2} thisClass="overflow-hidden bg-white h-72" items={inventory} />
            </div>
        </div>
        <ExpandedItem />
        </>
        

    )
}

export default Shopping