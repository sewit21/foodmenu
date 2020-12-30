import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Search from './searchparams';
import Food from './Food';


const App = () => {
return (
  <div>
  <div>
<h1 id="style">Favorite Food Recipes</h1>

<p> A list of some tasty recipes that are easy to make:</p>
  

<img src="cooking.png" alt="dough"></img>

</div>
  
  <div className = "second">
    <p> Send us your favorite recipes dishes and we will post it on our blog!</p>
<Food/>
<Search/>

  </div>
  </div>
);
};

render(React.createElement(App), document.getElementById("root"));

