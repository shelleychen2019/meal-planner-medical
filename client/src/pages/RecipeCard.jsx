
import React, { Component } from 'react'
import logo from '../logo.svg'; // with import
import ReactPlayer from 'react-player'
//like Menu component

class RecipeCard extends Component {
    // after changing the onClick property

    render() {
        const isOnFavPage = this.props.isOnFavPage;
        let button;
        if (isOnFavPage){
            button = <a onClick = {this.props.onRemoveFav} className="btn btn-primary">Remove</a>
        } else {
            button = <a onClick = {this.props.onAddtoMenu} className="btn btn-primary">Favorite</a>
        }    
        // console.log('recipe card props', this.props)
        return (
            // if button is clicked show everything
            // if not then
            // <div key = {this.props.recipe.id}></div>?
            // key = {meal.idMeal}
            <div className=".container"  >
                <div className="ml-5 mt-5 mb-5">
                    <div className="card" style={{ width: 18 + 'rem' }}onClick={this.props.onClick}>
                        <img className="card-img-top" src={this.props.recipe.picture} />
                        <div className="card-body">
                            <h2 className="card-title">{this.props.recipe.name}</h2>
                            <h3 className="card-text">{this.props.recipe.main_ingredient}</h3>
                            {/* <p className="card-text"> {this.props.recipe.instructions}  </p> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cuisine: {this.props.recipe.cuisine}</li>
                                {/* <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li> */}
                            </ul>
                            {/* <a href="#" className="card-link">See More</a>
                    <a href="#" className="card-link">Ingredients</a> */}
                        </div>
                    </div>
                    {button}
                </div>
            </div>

        )
    }
};

export default RecipeCard;

