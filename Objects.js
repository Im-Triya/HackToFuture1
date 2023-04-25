import React, {useState} from 'react'
import {data} from "./Data/Data.js";

const Objects = () => {
    const [objects, setObjects]= useState(data);

    // Filter type Category
    const filterType=(category)=>{
        setObjects(
            data.filter( (item)=> {
                return item.category===category;
            })
        )
    }

    //Filter Type Price
    const filterPrice=(price)=>{
        setObjects(
            data.filter( (item)=> {
                return item.price=== price;
            })
        )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <h1 className='text-orange-600 font-bold text-4xl text-center'>Best Sellings</h1>

    {/* Filter Row */}
    <div className='flex flex-col lg:flex-row justify-between'>

        {/* Filter type */}
        <div>
        <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
            <button onClick={()=> setObjects(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={()=> filterType("Books")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Books</button>
            <button onClick={()=> filterType("Stationary")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Stationary</button>
            <button onClick={()=> filterType("Electricals")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Electricals</button>
            <button onClick={()=> filterType("Software")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Software</button>
            <button onClick={()=> filterType("Vehicles")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Vehicles</button>
        </div>
        </div>

        {/* Filter price */}
        <div>
        <p className='font-bold text-gray-700'>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=> filterPrice("$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={()=> filterPrice("$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={()=> filterPrice("$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={()=> filterPrice("$$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
        </div>
        </div>

    </div>

    {/* Dispaly Objects */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {objects.map( (item, index)=> (
        <div key={index} className='border shadow-2xl rounded-lg hover:scale-105 duration-300'>
            <img className='w-full h-[200] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
            </div>
        </div>
    ))};
    </div>

    </div>
  )
}

export default Objects