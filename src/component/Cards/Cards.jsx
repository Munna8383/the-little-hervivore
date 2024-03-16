import { GoDotFill } from "react-icons/go";
import { IoIosTime } from "react-icons/io";
import { GiEmbrassedEnergy } from "react-icons/gi";

const Cards = ({card,handleWantToCook}) => {
    const {recipe_name,recipe_image,short_description,ingredients_number,ingredients,preparing_time,calories} = card;
    return (
    
     <div className="card shadow-xl">
       <figure><img className="h-50" src={recipe_image} alt="Shoes" /></figure>
      <div className="card-body">
       <h2 className="card-title">{recipe_name}</h2>
      <p className="text-base font-bold text-[#878787]">{short_description}</p>
      <hr />
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Ingredient:{ingredients_number}</h1>

        
            <div className="flex">
                <GoDotFill></GoDotFill>
                <p className="text-[#878787]">{ingredients[0]}</p>
            </div>
            <div className="flex">
                <GoDotFill></GoDotFill>
                <p className="text-[#878787]">{ingredients[1]}</p>
            </div>
            <div className="flex">
                <GoDotFill></GoDotFill>
                <p className="text-[#878787]">{ingredients[2]}</p>
            </div>
            <div className="flex">
                <GoDotFill></GoDotFill>
                <p className="text-[#878787]">{ingredients[3]}</p>
            </div>
            
        
        
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="flex items-center">
        <IoIosTime />
        <span  className="text-[#878787]"  ><span>{preparing_time}</span> minutes</span>
        </div>
        <div className="flex items-center">
            <GiEmbrassedEnergy />
        <span  className="text-[#878787]"><span>{calories}</span> calorie</span>
        </div>
      </div>
      
      <div className="card-actions justify-right mt-3">
      <button onClick={()=>handleWantToCook(card)} className="px-6 py-3 bg-[#35f3a3] rounded-2xl font-semibold">Want To Cook</button>
     </div>
     </div>
    </div>
    );
};

export default Cards;