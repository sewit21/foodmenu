import React from 'react';


export default class Search extends React.Component {
    state = {
        loading: true,
        meal: []
      
        
    };
    componentDidMount= () => {
        const key = "0";
        const food = " ";
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}&Key=${key}`;

        
        fetch(url, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(result => {
          console.log('Result: ', result)
         const meal = result.meals;
          this.setState({meal: meal});

        })
        .catch(() => {
          
        })
      
    };
   displayMeal = () => this.state.meal.map((element, index, arr) => <img key={index} src={element.strMealThumb} alt="" />
     );

       render() {
        
console.log('State: ', this.state);
   
           return ( 
           
           <div> 
             <h1> Yummy Dish !</h1>

          
                 {this.displayMeal()}
                  
            
             
  </div>
           
     
           );
   };
  }

