
import './card.css'
import { IoMdTime } from "react-icons/io";
import { PiFireSimple } from "react-icons/pi";

const Card = ({recipe,handleWanttoCook}) => {
    const {recipe_image,recipe_name,recipe_id,short_description,ingredients,preparing_time,calories} = recipe;

   
    return (
        <div className='flex mt-8'>
            <div className='p-4 bor border-b-2 max-w-md mx-auto space-y-4'>
                <div className='px-6 space-y-3'>
                    <div className='flex justify-center'>
                        <img className='photo' src={recipe_image} alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold'>{recipe_name}</h2>
                    <p className='mb-3'>{short_description}</p>
                </div>
                < hr />
                <div className='px-6'>
                    <h1>Ingredients:6</h1>
                    {
                        ingredients.map((ing,id)=> <li key={id}>{ing}</li> )
                    }
                </div>
                <hr />
                <div className='flex gap-4 px-6'>
                    <div className='flex items-center gap-2'>
                        <span><IoMdTime /></span>
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span><PiFireSimple /></span>
                        <p>{calories} calories</p>
                    </div>
                    
                </div>
                <div className='px-6'>
                    <button onClick={()=> handleWanttoCook(recipe)} className='bg-green-500 rounded-2xl p-2 mt-2  font-semibold px-8 '>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Card;