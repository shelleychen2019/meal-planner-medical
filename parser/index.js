// const { map } = require('jquery');
// // Authenticate with mealDB, key = 1
// // O get all 26 letters recipes
// // X Print steps and ingredients
// // X Postman thing in Node (new directory from API, parse)’
// // X Extract data I want from each item
// // X Format into JSON

// const request = require('request');
// request('https://www.themealdb.com/api/json/v1/1/search.php?f=a', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //   console.log('body:', body); // Print the HTML.
//     const data = JSON.parse(body);//convert body to string? or javascript object
//     const meal_array = data.meals //meals is a key in the data js object, value is the array of meals
//     //for each recipe, make each meal into a Schema and put in an array
//     //     {
//     //         name: {type: String},
//     //         main_ingredient: {type: String},
//     //         cuisine: {type: String},
//     //         instructions: [String]
//     //     }

//     let schema_array = meal_array.map(function (item) {
//         let obj = {};
//         obj.name = item.strMeal;
//         obj.main_ingredient = item.strCategory;
//         obj.cuisine = item.strArea;
//         obj.instructions = item.strInstructions.replace(/\r\n/g, "<br />");
//         return obj
//     })

//     console.log('convert recipe to my schema', schema_array)

//     let output = JSON.stringify(schema_array)
//     console.log(output)
// });

const axios = require('axios');
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const url_array = alphabet.map(letter =>
`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
)
console.log(url_array)
(async () => {
//         try {
//             const allResponses = await axios.all(
//                 url_array.map(url => axios.get(url)) // array of 26 urls
//             );
//             const meal_array = allResponses.map(
//                 response => response.data.meals) //meals is a key in the data js object, value is the array of meals
//                 console.log(meal_array);
//             } catch (error) {
//             console.log(error.response.body);
//         }
})(); //whole syntax () lets you call async fxn