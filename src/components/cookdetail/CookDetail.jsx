

const CookDetail = ({cook,handlePreparing}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = cook
    return (
        <div>
              
              <div className="flex gap-20 bg-gray-40 rounded-xl m-2 p-4 items-center">
                <div className="w-8">
                
                    <p>{recipe_name}</p>
                </div>
                <div className="w-8 px-4">
                    <p>{preparing_time}</p>
                </div>
                <div>
                
                    <p>{calories}</p>
                </div>
                <div className="">
                <button onClick={()=> handlePreparing(cook)} className="bg-green-500 p-2 rounded-xl">Preparing</button>
                </div>
            </div>
             
        </div>
    );
};

export default CookDetail;