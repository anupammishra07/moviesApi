
import React from 'react'

export default function MoviesCard({value}) {
  return (
    <div className=''>
    <div  className="max-w-sm mx-8 my-4 p-4 shadow-md rounded-md bg-orange-200 mx-auto ">
        <img className='h-48 w-96' src={value.Poster} alt=""/>
        <h1 className='font-bold text-2xl'>{value.Title}</h1>
        
        
        <div className='font-bold'>
        <h1>Year : {value.Year}</h1>
        
        </div> 
        

    </div>
    </div>
  )
}
