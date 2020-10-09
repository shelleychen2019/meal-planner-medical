// const { map } = require('jquery');
// // Authenticate with mealDB, key = 1
// // O get all 26 letters recipes
// // X Print steps and ingredients
// // X Postman thing in Node (new directory from API, parse)’
// // O Extract data I want from each item
// // X Format into JSON

const request = require('request');
request('https://www.themealdb.com/api/json/v1/1/search.php?f=a', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML.
  const data = JSON.parse(body);//convert body to string? or javascript object
  const meal_array = data.meals //meals is a key in the data js object, value is the array of meals
  //for each recipe, make each meal into a Schema and put in an array
  //     {
//         name: {type: String},
//         main_ingredient: {type: String},
//         cuisine: {type: String},
//         instructions: [String]
//     }
  
  let schema_array = meal_array.map(function(item){
      let obj = {};
      obj.name = item.strMeal;
      obj.main_ingredient = item.strCategory
      obj.cuisine = item.strArea
      obj.instructions = item.strInstructions
  })
  console.log('convert recipe to my schema', schema_array) 

let output = JSON.stringify(schema_array)
console.log(output)
});





// import React, { Component } from 'react';
// import axios from 'axios';
// // import './App.css';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       meal: []
//     }
//   }
//   componentDidMount(){
//     const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    
//     axios.get(URL)
//       .then(res => {
//         const meal = res.data.meals; //Taking just the required data
//         if(typeof meal === 'object'){
//           this.setState({ meal });// setting it to state of our app
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
// }
// render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }
// export default App;