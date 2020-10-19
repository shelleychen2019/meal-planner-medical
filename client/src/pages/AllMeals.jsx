
import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'

import 'react-table/react-table.css'
import RecipeCard from './RecipeCard'
import CardDetail from './CardDetail'
import Favorites from './Favorites'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateMeal extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/meals/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMeal extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the meal ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMealById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

//component for filtering by cuisine
class AllMeals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [], //right side is in the router, left side is local var name
            columns: [],
            isLoading: false,
            selectedRecipe: null,
            favorites: []
        }
    }


    //don't need cuisine in state
    //edge case for isLoading, setState is loading should be true and then false after fetch
    //if setState doesn't happen instantly
    // getMealsByDiet might return first before setState occurs, isLoading gets set to false
    componentDidMount = async () => {
        //happens before browser updates the screen
        this.setState({ isLoading: true })
        //You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
        // const { cuisine } = this.state //extraction operator, extracts state fields
        await api.getAllMeals().then(meals => {
            // await api.getMealsByDiet(cuisine).then(meals => {
            this.setState({
                meals: meals.data.data,
                isLoading: false,
            })
            // console.log(meals);
        })
    }
    //onAdd sets state to a list of added recipes

    onAdd(recipe) {
        console.log('favorites and selected recipe', this.state.favorites,
            recipe);
        this.setState(
            state => {
                const newFavorites = state.favorites.concat(recipe);

                return {
                    favorites: newFavorites
                }
            })
    };

    onRecipeSelect(recipe) {
        this.setState({ selectedRecipe: recipe });
    }
    renderRecipe(recipe) {
        if (recipe != null) {
            return (
                // should this be a different component?
                <CardDetail
                    recipe={recipe}
                />
            )
        }
        else {
            return (
                <div>Need to fix this</div>
            )
        }
    }

    render() {
        // const { meals, isLoading } = this.state

        const recipes = this.state.meals.map(recipe => {
            //easier to console.log
            //className applies css to JSX
            return (
                <RecipeCard
                    onClick={() =>
                        this.onRecipeSelect(recipe)}
                    recipe={recipe}
                    onAddtoMenu={() =>
                        this.onAdd(recipe)}
                />
            )
        })

        let showTable = true
        if (!recipes.length) {
            showTable = false
        }

        return (

            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderRecipe(this.state.selectedRecipe)}
                    </div>
                </div>

                <div className="row">
                    {/* <RecipeCard meal ={this.state.meals} onClick={(recipe) => this.onRecipeSelect(recipe)} />
                    <CardDetail dish={this.state.meals.filter((meal) => meal.id === this.state.selectedRecipe)[0]} /> */}
                    {recipes}
                </div>
            </div>
        )
    }
}

export default AllMeals