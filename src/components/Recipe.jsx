import { useState } from "react"

export default function Recipe({recipe, id}) {
    return (
        <div>
        <div className="row">
            <div className="col-8 ps-2">
                <p>
                    <strong>Makes {recipe.yield} portions</strong>
                    {recipe.totalTime > 0 && <span><strong> | Prep: {recipe.totalTime} minutes</strong></span>}
                </p>
                <h5>Ingredients:</h5>
                <ul>
                    {recipe.ingredientLines.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                </ul>
            </div>
            <div className="col-4 mb-3">
                <img className='img-fluid rounded mx-auto d-block' src={recipe.images.REGULAR.url} alt={recipe.label} />
            </div>
            <hr />
        </div>
        <div className="accordion">
        <div className="accordion-item">
            <h2 className="accordion-header"></h2>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Nutrient Info
            </button>
            <div id="collapseOne" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <p>
                        <span>{recipe.totalNutrients.CHOCDF.label}: {parseInt(recipe.totalNutrients.CHOCDF.quantity)}{recipe.totalNutrients.CHOCDF.unit} | </span>
                        <span>{recipe.totalNutrients.PROCNT.label}: {parseInt(recipe.totalNutrients.PROCNT.quantity)}{recipe.totalNutrients.PROCNT.unit} | </span>
                        <span>{recipe.totalNutrients.ENERC_KCAL.label}: {parseInt(recipe.totalNutrients.ENERC_KCAL.quantity)}{recipe.totalNutrients.ENERC_KCAL.unit} | </span>
                        <span>{recipe.totalNutrients.SUGAR.label}: {parseInt(recipe.totalNutrients.SUGAR.quantity)}{recipe.totalNutrients.SUGAR.unit}</span>
                    </p>
                </div>
            </div>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Health Labels
            </button>
            <div id="collapseTwo" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <p>
                        {recipe.healthLabels.map((label, index) => <span key={index}> | {label}</span>)}
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}