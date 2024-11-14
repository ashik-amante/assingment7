import { useState } from "react";
import CookDetail from "../cookdetail/CookDetail";
import Cooking from "../cooking/Cooking";
import './Cook.css'



const Cook = ({cooks}) => {
    const [cooking,setCooking] = useState([])

    const handlePreparing = recipe =>{
        const newcooking = [...cooking, recipe]
        setCooking(newcooking)
        // remove
       
    }

    // const handleRemovePrep = id =>{
    //     const remaining = cooking.filter(cook=> cook.recipe_id !== id)
    //     setCooking(remaining)
    // }
    
    
    return (
        <div className="w-1/3 border mt-8 p-4  ">

            <div>
                <h1 className="text-2xl font-semibold text-center mb-4">Want to Cook: {cooks.length} </h1>
             <hr />
              {/* Table format */}
              <div className="flex gap-14 mt-4">
                <div className="mx-6">
                    <h1>Name</h1>
                </div>
                <div>
                    <h1>Time</h1>
                </div>
                <div>
                    <h1>Calories</h1>
                </div>
                
            </div>

             {
                cooks.map((cook,id)=> <CookDetail key={id} cook={cook} handlePreparing = {handlePreparing}></CookDetail> )
             }
            </div>

            {/* Currently cooking */}
            <div>
                <h1 className="text-2xl font-semibold text-center mb-4">Cooking: {cooking.length} </h1>
             <hr />
              {/* Table format */}
              <div className="flex gap-14 mt-4">
                <div className="mx-6">
                    <h1>Name</h1>
                </div>
                <div>
                    <h1>Time</h1>
                </div>
                <div>
                    <h1>Calories</h1>
                </div>
                
            </div>

             {
                cooking.map((cook,id)=> <Cooking cook={cook} key={id}></Cooking> )
             }
            </div>
            
        </div>
    );
};

export default Cook;