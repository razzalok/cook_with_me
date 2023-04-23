import React from 'react'
import Ingredients from './Ingredients'
const Hero = ({meals}) => {
  
  let instructions = meals['strInstructions']+"";
  
  const instructionsList=instructions.split("STEP ")
  // console.log(instructionsList[3]);
  
   const instructionsListitem= instructionsList.map((value,index)=>
   <li className='mt-2' key={index} >{value}</li>
   )
   const strYoutube =meals['strYoutube']
  //  console.log(strYoutube);
   const handlePlayVideo = () => {
    window.open(strYoutube, '_blank');
  }
  return (
    <>
    <div className='flex mt-20 justify-around'>
      <div className='flex items-center flex-col border rounded-xl border-slate-700 overflow-hidden shadow-lg dark:shadow-gray-800 bg-[#03203C] h-fit mt-24'>
        <img className='w-80' src={meals['strMealThumb']} alt="img" />
        <p className='text-[#CAD5E2] text-3xl mt-3 inline-block px-3 py-1 font-bold'>{meals['strMeal']}</p>
        <p className='text-[#CAD5E2] text-1xl inline-block px-3 py-1 '>Category : {meals['strCategory']}</p>
        <p className='text-[#CAD5E2] text-1xl inline-block px-3 py-1 '>Area : {meals['strArea']}</p>
      </div>
     
    
    <Ingredients meals={meals}/>
    
    {/* <p>{meals['strInstructions']}</p>
    <p>{meals['strInstructions']}</p>
  <p>{meals['strInstructions']}</p> */}
    </div>
    <div className='mt-20 mb-10 text-[#03203C] text-1xl px-3 py-2 block mx-[5%] border rounded-xl border-slate-700 overflow-hidden shadow-lg'>
    <p className='font-bold text-2xl text-center align-middle'><u>Instructions</u></p>
    <ul className='py-3'>
      
  <button className='rounded-md border border-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-green-600 hover:bg-green-300' onClick={handlePlayVideo}>Play Video</button>
      {instructionsListitem}
      </ul>
    </div>
    
    </>
    
  )
}

export default Hero

