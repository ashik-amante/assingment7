import "./App.css";
import Banner from "./components/Banner/Banner";
import Cook from "./components/cook/Cook";
import Header from "./components/Header/Header";
import Menu from "./components/menu/Menu";
import Recipes from "./components/recipes/Recipes";
import { useState } from 'react';

function App() {
  // want to cook 
  const [cooks, setCook] = useState([]);
  console.log(cooks);

  const handleWanttoCook = (recipe) => {
    const newcook = [...cooks, recipe];
    setCook(newcook);
  };
  const handleRemovefromPreparing = id =>{
    const remaining = cooks.filter(idx => idx.recipe_id !== id)
    setCook(remaining)
    console.log('ok');
  }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className="flex container mx-auto gap-6">
        <Menu handleWanttoCook= {handleWanttoCook}></Menu>
        <Cook cooks={cooks} handleRemovefromPreparing= {handleRemovefromPreparing}></Cook>
      </div>
    </>
  );
}

export default App;
