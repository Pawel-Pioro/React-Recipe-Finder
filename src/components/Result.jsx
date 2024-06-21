import { useState } from 'react'

import Recipe from './Recipe'

export default function Result({recipe, id}) {
    return (
        <>
        <hr />
        <div className='row' onClick={() => console.log(recipe)}>
            <div className='col-4'>
                <img className='img-fluid rounded mx-auto d-block' src={recipe.images.SMALL.url} alt={recipe.label} />
            </div>
            <div className='col-8'>
                <h3>{recipe.label}</h3>
                <p>{recipe.mealType} {recipe.dishType} | {recipe.dietLabels.map((diet, index) => <span key={index}>{diet} | </span>)} {recipe.cuisineType[0][0].toUpperCase() + recipe.cuisineType[0].slice(1)}</p>
                <p>
                    <strong>Makes {recipe.yield} portions</strong>
                    {recipe.totalTime > 0 && <span><strong> | Prep: {recipe.totalTime} minutes</strong></span>}
                </p>
                <button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target={"#" + id}>View Recipe</button>
            </div>

        <div className="modal fade" id={id} tabIndex="-1" >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">{recipe.label}</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <Recipe recipe={recipe} id={id}/>
            </div>
            <div className="modal-footer">
            <button type="button" className='btn btn-secondary' onClick={() => window.open(recipe.url)}>View blog</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Close Recipe</button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}