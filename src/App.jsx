
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Recipe from './component/Our_Recipe/Recipe'

import { useEffect } from 'react'
import Cards from './component/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cards,setCards]=useState([])
  const [cook,setCook] = useState([])
  const [cooking,setCooking]= useState([])

  useEffect(()=>{
    fetch("cook.json")
    .then(res=>res.json())
    .then(data=>setCards(data))
  },[])

  const handleWantToCook = (card)=>{

    const isExist = cook.find(data=>data.recipe_id==card.recipe_id);

    if(!isExist){
      setCook([...cook,card])
      toast.success("Added !", {
        position: "top-center"
      });
    }
    else{
      toast.warn("Already added !", {
        position: "top-center"
      });
    }


  }

  const handlePreparing =(id)=>{
    const remainCook = cook.filter(item=>item.recipe_id!=id)
    setCook(remainCook);
    toast.success("Cooking !", {
      position: "top-center"
    });
    const findCooking =  cook.find(item=>item.recipe_id==id);
    setCooking([...cooking,findCooking])

  }
 
  

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>

      <div className='mt-20 w-11/12 mx-auto'>
        
        <div className='flex flex-col lg:flex-row gap-2 justify-center'>
          
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 p-5 w-2/3'>

         {
           cards.map(card=><Cards key={card.recipe_id} handleWantToCook={handleWantToCook} card={card}></Cards>)
         }

</div>

<div className='w-1/3 space-y-3'>
<div className='text-center text-3xl font-bold mb-6'>
  <h1>Want To Cook:{cook.length}</h1>
  <hr className='mt-5' />
</div>


 <div className='grid grid-cols-4 gap-5 text-center text-xl text-[#878787] space-x-2'>
  <h1>Name</h1>
  <h1>Time</h1>
  <h1>Calories</h1>
 </div> 

{
  cook.map((item,index)=>(
    <div key={item.recipe_id} className=' grid grid-cols-4 gap-5 text-center space-y-4 text-[#878787] text-base font-semibold'>
     <div>
     <h1><span>{index+1}</span><span>:</span>{item.recipe_name}</h1>
     </div>
     <div>
     <h2>{item.preparing_time}</h2>
     </div>
      <div>
      <h2>{item.calories}</h2>
      </div>
      <div>
        <button onClick={()=>handlePreparing(item.recipe_id)} className="px-4 py-2 bg-[#35f3a3] rounded-2xl font-semibold text-black">preparing</button>
      </div>
    </div>
  ))
 }

<div  className='text-center text-3xl font-bold py-5'>
  <h1>Currently Cooking: {cooking.length}</h1>
  <hr className='mt-6' />
</div>

<table className="table text-base font-semibold">

    <thead >
      <tr className='text-xl text-[#878787] '>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>

      {
        cooking.map((item,index)=>(

          // eslint-disable-next-line react/jsx-key
          <tr className='bg-gray-100 py-3 px-1 rounded-xl'>
        <th>{index+1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
      </tr>

        ))
      }
 
    </tbody>
  </table>

  <div className='flex justify-center gap-6'>
    <hr className='mt-3' />
    <h1 className='text-lg font-bold'>Total Time: {cooking.reduce((p,c)=>p+c.preparing_time,0)} </h1>
    <h2 className='text-lg font-bold'>Total calorie: {cooking.reduce((p,c)=>p+c.calories,0)}</h2>
  </div>

</div>



        </div>

      </div>

     
      <Footer></Footer>
      <ToastContainer></ToastContainer>
       
    </div>
  )
}

export default App
