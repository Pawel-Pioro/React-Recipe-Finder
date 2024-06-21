import {useState} from "react";

export default function Form({setResults}) {
    const [inputs, setInputs] = useState({
        "query": "",
        "diet": "",
        "cuisine": ""
    })
    
    const APP_ID = "fd4f0413"
    const APP_KEY = "6df5d386f006da5a0b9390443de00db2"

    function searchHandler(){
        console.log(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputs.query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet="${inputs.diet}"&cuisineType="${inputs.cuisine}"`);
        const response = fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputs.query}&app_id=${APP_ID}&app_key=${APP_KEY}${inputs.diet && `&diet=${inputs.diet}`}${inputs.cuisine && `&cuisineType=${inputs.cuisine}`}`)
        .then(response => response.json())
        .then(data => {
            setResults(data.hits)
        })
    }

    return (
        <div>
            <div className="input-group mb-3" style={{maxWidth: "500px", margin: "auto"}}>
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
            <button className="btn btn-primary" id="search" type="button" onClick={() => searchHandler()}>Search</button>
            </div>
        </div>
    )
}