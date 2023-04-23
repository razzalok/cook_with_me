
import React from 'react'

const Ingredients = ({meals}) => {

  const ingredient = "strIngredient"
  const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const baseUrl = "https://www.themealdb.com/images/ingredients/"
  

  const ingredients = num.map((i)=>meals[ingredient+i]!=="" && meals[ingredient+i]!==null ?
   ( <div className='text-center'> {<img className = "w-32 text-center inline-block align-middle place-content-center" src={baseUrl+meals["strIngredient"+i]+".png"} alt="img" />}<p>{meals["strMeasure"+i]}</p><li key={i}>{meals[ingredient+i]}</li></div>):null
)      
  return (
    <div>
      <p className='text-[#03203C] text-3xl px-3 py-1 text-center align-middle mb-5 '><u>Ingredient</u></p>
      <ul className='grid grid-cols-4 gap-1 text-[#03203C] text-1xl place-content-center'>{ingredients}</ul>
      
    </div>
  )
}

export default Ingredients
