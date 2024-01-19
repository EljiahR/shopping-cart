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
            itemDiv.style.left = e.pageX
            itemDiv.style.top = e.pageY
            itemImage.src = item.image
            console.log(itemDiv)
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
            <div className="bg-gray-50 grid grid-cols-5 grid-rows-5 gap-10" id="trending">
                {isLoading &&
                <Loading />
                }
                <Items itemExpand={itemExpand} imageSize={1} thisClass="" items={inventory} />
            </div>
        </div>
        <ExpandedItem />
        </>
        

    )
}

export default Shopping