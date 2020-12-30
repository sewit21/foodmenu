import React, { useState } from 'react';
import Search from './searchparams';
import Dropdown from './dropdown';


const Area = () => {
 const [meal, MealDropdown] = useDropdown("Arrabriata");

 return (
 <div className="search-params">
            <form>
              <label htmlFor="meal">
Meals
<input id = "meal" value= {meal}
placeholder="meal"
onChange={e => updateMeal(e.target.value)}
onBlur={e => updateMeal(e.target.value)}/>
              </label>
              <button> Submit </button>
            </form>
</div>
);
};


export default Area;