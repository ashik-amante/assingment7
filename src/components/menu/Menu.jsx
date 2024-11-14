import { useEffect, useState } from "react";
import Card from "../card/Card";


const Menu = ({handleWanttoCook}) => {
    const [recipes, setRecipes] = useState([])
    
    

    useEffect(()=>{
        fetch('recipe.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        <div className="w-2/3 grid grid-cols-2">
            {
                recipes.map(recipe=> <Card key={recipe.recipe_id} recipe={recipe} handleWanttoCook={handleWanttoCook}></Card> )
            }
            
        </div>
    );
};

export default Menu;