
import React, { Component } from 'react'
import logo from '../logo.svg'; // with import

class RecipeCard extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="card" style={{ width: 20 + 'rem' }}>
            <img className="card-img-top" src= {this.props.picture} />
            {/* {this.props.picture} */}
            <div className="card-body">
                <h1 className="card-title">{this.props.name}</h1>
                <h2 className="card-text">{this.props.main_ingredient}</h2>
                {/* <h4 className="card-text"> {this.props.instructions}  </h4> */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cuisine: {this.props.cuisine}</li>
                    <li className="list-group-item">Difficulty</li>
                    {/* <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li> */}
                </ul>
            </div>
        </div>
        )
    }
};

export default RecipeCard;

