import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import ExpandedItem from "./ExpandedItem"
import Items from "./Items"
import Loading from "./Loading"

const Shopping = () => {
    const { inventory, isLoading, getInventory } = useOutletContext()
    
    //this is NOT done
    const itemExpand = (e, expand, item = null) => {
        const itemDiv = document.getElementById("expanded-item")
        const itemImage = document.getElementById("expanded-item-image")
        if(expand){
            itemDiv.classList.remove("hidden")
            itemDiv.style.left = `${e.pageX + 10}px`
            itemDiv.style.top = `${e.pageY}px`
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
            <div className="bg-gray-50 grid grid-cols-5 grid-rows-4 gap-10 p-5" id="trending">
                {isLoading &&
                <Loading />
                }
                <Items itemExpand={itemExpand} imageSize={1} thisClass="h-36 overflow-hidden" items={inventory} />
            </div>
        </div>
        <ExpandedItem />
        </>
        

    )
}

export default Shopping