import React, { useState } from 'react'
import axios from 'axios'
import './Read.css'

const Read = () => {

  // let x = true;
  const [apiData,setApiData] = useState([]);

  const viewRecipe =() => {
    axios.get(`https://6426b8e8d24d7e0de47690ab.mockapi.io/recipe`)
    .then((res)=> {
        console.log(res.data)
        setApiData(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }
  return (
    <div className='readpage'>
        <button onClick={viewRecipe} className='viewbtn'>View All Recipe</button>
        {/* {x ? <div>hhh</div> : <div>ddd</div>}
        {x && <div>true</div>} */}
        <div className='recipes'>
        {
          apiData.map((eachItem,eachItemIndex) => {
            return (
              <>
              <div className='eachRecipe'>
              <p>Name : {eachItem.name}</p>
              <p>Procedure : {eachItem.description}</p>
              </div>
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default Read