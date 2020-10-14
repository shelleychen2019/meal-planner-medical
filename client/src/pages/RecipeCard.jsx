
import React, { Component } from 'react'
import logo from '../logo.svg'; // with import

class RecipeCard extends Component {
    render() {
        // console.log(this.props)
        return (
            <div class = ".container">
                <div class="card" style={{ width: 18 + 'rem' }}>
                <img class="card-img-top" src={this.props.picture} />
                {/* {this.props.picture} */}
                <div class="card-body">
                    <h1 class="card-title">{this.props.name}</h1>
                    <h2 class="card-text">{this.props.main_ingredient}</h2>
                    {/* <h4 class="card-text"> {this.props.instructions}  </h4> */}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cuisine: {this.props.cuisine}</li>
                        <li class="list-group-item">Difficulty</li>
                        {/* <li class="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" class="card-link">Trail Information</a></li> */}
                    </ul>
                    {/* <a href="#" class="card-link">See More</a>
                    <a href="#" class="card-link">Ingredients</a> */}
                    <a href="#" class="btn btn-primary">Add to Menu</a>
                </div>
            </div>
            </div>
        )
    }
};

export default RecipeCard;

