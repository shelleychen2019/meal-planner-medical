
import React, { Component } from 'react'
import logo from '../logo.svg'; // with import
import ReactPlayer from 'react-player'

//Presentational Component
class CardDetail extends Component {

    render(recipe) {
        // console.log(this.props)recipe.
        return (
            // <div key = {this.props.recipe.id}></div>?
            <div className = ".container" onClick={this.props.onClick} >
                <div className = "ml-5 mt-5 mb-5"> 
                <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src={this.props.recipe.picture} />
                <div className="card-body">
                    <h2 className="card-title">{this.props.recipe.name}</h2>
                    {/* <h3 className="card-text">{this.props.recipe.main_ingredient}</h3> */}
                    <p className="card-text"> {this.props.recipe.instructions}  </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cuisine: {this.props.recipe.cuisine}</li>
                    </ul>
                    {/* <a href="#" className="card-link">See More</a>
                    <a href="#" className="card-link">Ingredients</a> */}
                    <a href="#" className="btn btn-primary">Add to Menu</a>
                </div>
                <ReactPlayer url= {this.props.recipe.video} playing />
            </div>
            </div>
            </div>
            
        )
    }
};

export default CardDetail;
