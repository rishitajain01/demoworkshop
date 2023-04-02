import React, { useState } from 'react'
import './Create.css'
import axios from 'axios';

const Create = () => {

  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');

  // let r_name = 'Rajma'

  const addRecipe = (e) => {
    e.preventDefault();
    console.log('form submitted')
    console.log('Name:', recipeName)
    console.log('Description:', recipeDescription)

    axios.post(`https://6426b8e8d24d7e0de47690ab.mockapi.io/recipe`, {
      name:recipeName,
      description:recipeDescription
    })
  }
  const changeName = (event) => {

    setRecipeName(event.target.value);
    // console.log(event.target.value);
    // console.log(recipeName);

    // r_name= 'chawal';
    // console.log(r_name)
  }
  const changeDescription = (event) => {
    setRecipeDescription(event.target.value);
  }

  return (
    <>
    <div className='background'>
      <form className='create_recipe_box'>
        <label htmlFor='recipe_name'>Recipe Name</label>
        <input name="recipe_name" value={recipeName} onChange={changeName} id='recipe_name' />
        <label htmlFor='description'>Recipe Desciption</label>
        <input name="description" id='description' value={recipeDescription} onChange={changeDescription} />
        {/* <input type='file' /> */}
        <button className='add_recipe_btn' onClick={addRecipe}>Add Recipe</button>
      </form>
      </div>
    </>
  )
}

export default Create