import { useState } from 'react';

import React from 'react';
import './Create.css'

function Create(){
    const[title, setTitle] = useState('')
    const[method, setMethod] = useState('')
    const[cookingTime, setCookingTime] = useState('')

    // create a function that handles the submit event
    function handleSubmit(event){
        event.preventDefault();
        console.log(title, method, cookingTime);
    }
    
    return(
        <div className="create">
            <h2 className='page-title'>Add a new recipe</h2>
            {/* listen to the form submit event */}
            <form onSubmit={handleSubmit}> 
                <label>
                    <span>Recipe title:</span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}
                        // data binding
                        value={title} 
                        required
                    />
                </label>
                {/* add ingredients */}
                
                <label>
                    <span>Recipe method:</span>
                        <textarea
                         onChange={(e) => setMethod(e.target.value)}
                         value={method}
                         required
                          />
                </label>
                <label>
                    <span>Cooking time(minutes):</span>
                    <input type="number" onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                     />
                </label>
                <button className='btn'> Submit</button>
            </form>
        </div>
    )
}
export default Create;