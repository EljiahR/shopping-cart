/* eslint-disable react/prop-types */

const Items = ({ itemExpand, items, thisClass, imageSize }) => {


    return (
        <>
        {items.map((item)=>{
            return (
                
                <div onMouseLeave={() => itemExpand(false)} onMouseMove={(e)=>itemExpand(e, true, item)} className={thisClass} key={item.id}>
                    <img className={`w-${imageSize} h-${imageSize}`} src={item.image} />
                    <p>${/\./.test(item.price) ? item.price : item.price + ".00"}</p>
                    <p>{item.title}</p>
                </div>
                
            )
        })}
        </>
    )
}

export default Items