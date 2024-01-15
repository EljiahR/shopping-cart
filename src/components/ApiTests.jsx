import { useEffect, useState } from "react"

const ApiTests = () => {
    const [data, setData] = useState(null)
    
    useEffect(()=>{
        const getResults = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery")
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        getResults()
    },[])

    return <div>tests</div>
}

export default ApiTests