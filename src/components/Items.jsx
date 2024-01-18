/* eslint-disable react/prop-types */
const Items = ({ items }) => {
   
    return (
        <>
        {items.map((item)=>{
            return (
                <div className="bg-white w-28 h-44 shrink-0 p-2 overflow-auto border-2 rounded-lg border-black" key={item.id}>
                    <img className="w-28 h-28" src={item.image} />
                    <p>${/\./.test(item.price) ? item.price : item.price + ".00"}</p>
                    <p>{item.title}</p>
                </div>
            )
        })}
        </>
    )
}

export default Items