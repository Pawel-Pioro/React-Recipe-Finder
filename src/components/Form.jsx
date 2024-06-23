import {useState} from "react";

export default function Form({setResults}) {
    const [inputs, setInputs] = useState({
        "query": "",
        "diet": "",
        "cuisine": "",
        "health": "",
        "mealType": ""
    })
    
    const APP_ID = "fd4f0413"
    const APP_KEY = "6df5d386f006da5a0b9390443de00db2"

    function searchHandler(){
        const response = fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputs.query}&app_id=${APP_ID}&app_key=${APP_KEY}${inputs.diet && `&diet=${inputs.diet}`}${inputs.cuisine && `&cuisineType=${inputs.cuisine}`}${inputs.health && `&health=${inputs.health}`}${inputs.mealType && `&mealType=${inputs.mealType}`}`)
        .then(response => response.json())
        .then(data => {
            setResults(data.hits)
        })
    }

    return (
        <div>
            <div className="input-group mb-3" style={{margin: "auto"}}>
            <input className="form-control" aria-describedby="search"  type="text" onChange={e => setInputs({...inputs, "query": e.target.value})} value={inputs.query} placeholder="Search for a recipe"></input>
            <select value={inputs.diet} className="form-select" onChange={ e => setInputs({...inputs, "diet": e.target.value})}>
                <option value="">Select Diet</option>
                <option value="balanced">Balanced</option>
                <option value="high-fibre">High-Fibre</option>
                <option value="high-protein">High-Protein</option>
                <option value="low-carb">Low Carb</option>
                <option value="low-fat">Low Fat</option>
                <option value="low-sodium">Low Sodium</option>
            </select>
            <select value={inputs.cuisine} className="form-select" onChange={ e => setInputs({...inputs, "cuisine": e.target.value})}>
                <option value="">Select cuisine</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="British">British</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Central Europe">Central Europe</option>
                <option value="Chinese">Chinese</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="French">French</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kosher">Kosher</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Nordic">Nordic</option>
                <option value="South American">South American</option>
                <option value="South East Asian">South East Asian</option>
            </select>
            <select value={inputs.health} className="form-select" onChange={ e => setInputs({...inputs, "health": e.target.value})}>
                <option value="">Select Health Requirement</option>
                <option value="alcohol-cocktail">Alcohol Cocktail</option>
                <option value="alcohol-free">Alcohol Free</option>
                <option value="celery-free">Celery Free</option>
                <option value="crustacean-free">Crustacean Free</option>
                <option value="dairy-free">Dairy Free</option>
                <option value="DASH">DASH</option>
                <option value="egg-free">Egg Free</option>
                <option value="fish-free">Fish Free</option>
                <option value="fodmap-free">FODMAP Free</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="immuno-supportive">Immuno Supportive</option>
                <option value="keto-friendly">Keto Friendly</option>
                <option value="kidney-friendly">Kidney Friendly</option>
                <option value="kosher">Kosher</option>
                <option value="low-fat-abs">Low Fat ABS</option>
                <option value="low-potassium">Low Potassium</option>
                <option value="low-sugar">Low Sugar</option>
                <option value="lupine-free">Lupine Free</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="mollusk-free">Mollusk Free</option>
                <option value="mustard-free">Mustard Free</option>
                <option value="no-oil-added">No Oil Added</option>
                <option value="paleo">Paleo</option>
                <option value="peanut-free">Peanut Free</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="pork-free">Pork Free</option>
                <option value="red-meat-free">Red Meat Free</option>
                <option value="sesame-free">Sesame Free</option>
                <option value="shellfish-free">Shellfish Free</option>
                <option value="soy-free">Soy Free</option>
                <option value="sugar-conscious">Sugar Conscious</option>
                <option value="sulfite-free">Sulfite Free</option>
                <option value="tree-nut-free">Tree Nut Free</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="wheat-free">Wheat Free</option>
            </select>
            <select value={inputs.mealType} className="form-select" onChange={ e => setInputs({...inputs, "mealType": e.target.value})}>
                <option value="">Enter Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
            </select>
            <button className="btn btn-primary" id="search" type="button" onClick={() => searchHandler()}>Search</button>
            </div>
        </div>
    )
}