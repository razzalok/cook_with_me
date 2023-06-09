import {useState ,useEffect} from 'react'
import Axios from 'axios'
import Hero from './Hero'
const Main = () => {
 const [dish,setDish]=useState('')
 const [meal,setMeal]=useState('Sushi')
 const [meals,setMeals] = useState({})
 const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

 const fetchDetails = async()=>{
  const {data}= await Axios.get(baseUrl+meal)
    console.log(data);
    setMeals(data.meals[0])
  }

 useEffect(()=>{
  fetchDetails()
})   
 const handleChange =(e)=>{
  setDish(e.target.meal)
 }
 

const handleSubmit = (e) => {
  e.preventDefault()
  setMeal(dish);
  fetchDetails()
  
}

  return (
    <div >
      
      <p className='bg-cyan-900 py-5 flex-initial flex-auto w-[40%] text-5xl text-[#CAD5E2] font-extrabold text-center w-full md:w-auto'>Cook With Me</p>

      <form onSubmit={handleSubmit} className='flex-initial text-center mt-10 ' >
            <input className='rounded-lg border-2 w-[40%] h-10 p-6 bg-[#758283] text-[#fff] text-[20px] border-none ' type="text" name='meal' value={dish}  onChange={handleChange}/>
            <input className='rounded-lg border-2  ml-2 p-2 bg-[#207398] text-[#fff] text-[20px] border-none  hover:bg-[#03203C] ease-in duration-300' id='search' type="submit" />
        </form>
        <Hero meals={meals}/>
    </div>
  )
}

export default Main


          