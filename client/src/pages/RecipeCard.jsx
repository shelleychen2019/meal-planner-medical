
import React, { Component } from 'react'
import logo from '../logo.svg'; // with import
import ReactPlayer from 'react-player'

class RecipeCard extends Component {
        // after changing the onClick property

    render() {
        // console.log(this.props)
        return (
            // <div key = {this.props.id}></div>?
            <div className = ".container" onClick={this.props.onClick} >
                <div className = "ml-5 mt-5 mb-5"> 
                <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src={this.props.picture} />
                <div className="card-body">
                    <h2 className="card-title">{this.props.name}</h2>
                    {/* <h3 className="card-text">{this.props.main_ingredient}</h3> */}
                    <p className="card-text"> {this.props.instructions}  </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cuisine: {this.props.cuisine}</li>
                        <li className="list-group-item">Difficulty</li>
                        {/* <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li> */}
                    </ul>
                    {/* <a href="#" className="card-link">See More</a>
                    <a href="#" className="card-link">Ingredients</a> */}
                    <a href="#" className="btn btn-primary">Add to Menu</a>
                </div>
                <ReactPlayer url= {this.props.video} playing />

            </div>
            </div>
            </div>
            
        )
    }
};

export default RecipeCard;

