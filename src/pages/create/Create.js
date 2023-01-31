import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import './Create.css'

function Create(){
    const[title, setTitle] = useState('')
    const[method, setMethod] = useState('')
    const[cookingTime, setCookingTime] = useState('')
    // create state for a new ingredient
    const[newIngredient, setNewIngredient]= useState('')
    // add ingredients to an array of ingredients
    const[ingredients, setIngredients] = useState([])

    const ingredientInput = useRef(null)
    const history = useHistory()

    const{postData, data, error} = useFetch(' http://localhost:3000/recipes ', 'POST')

    // create a function that handles the submit event
    function handleSubmit(event){
        event.preventDefault();
        postData({title, ingredients, method, cookingTime:cookingTime + ' minutes'})
        // console.log(title, method, cookingTime, ingredients,);
    }
    // create a function that handles add
    function handleAdd(e){
        e.preventDefault();
        // .trim removes any whitespace
        const ing= newIngredient.trim();

        
        // prevent adding duplicates
        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing]);
        } 
        // clear the input field
        setNewIngredient('')
        // focus the input field
        ingredientInput.current.focus()
    }
    
    // listen for when the data changes to redirect user to homepage
    useEffect(() => {
        if(data){
            // push the user to a new route
            history.push('/')
        }
    }, [data])

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
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                    {/* add one ingredient at a time */}
                        <input type="text"
                            onChange={(e) =>setNewIngredient(e.target.value)}
                            value ={newIngredient}
                            ref ={ingredientInput}
                         />
                        <button onClick={handleAdd} className='btn'>Add</button>
                    </div>
                </label>
                    {/* output ingredients */}
                    <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
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