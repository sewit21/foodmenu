import React, {useState} from 'react';
import './App.css';

const Foody = () => {
    const [foodie, updateFoodie] = useState("Select one");

    return (
        <div className="foodierecipe">
        <label htmlFor ="foodies">
            Recipes
            <select
            id="recipes"
            value= {foodie}
            onChange={e=> updateFoodie(e.target.value)}
            onBlur={e=> updateFoodie(e.target.value)}>
                <option>Green Bean Caserole</option>
                <option>Shepard Pie</option>
                <option>Mac N Cheese</option>
                <option>Grilled Chicken</option>
                
                
            </select>
        </label>
        </div>
    )
}

export default Foody;