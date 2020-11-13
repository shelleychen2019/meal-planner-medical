
import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import RecipeCard from './RecipeCard'
import CardDetail from './CardDetail'

import styled from 'styled-components'

import 'react-table/react-table.css'

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
class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            columns: [],
            isLoading: false,
            selectedRecipe: null,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        // await api.getAllMeals().then(meals => {
        console.log('this.state.isLoading: ', this.state.isLoading)
        await api.getMealsByFavorites().then(meals => {
            this.setState({
                meals: meals.data.data,
                isLoading: false,
            })
            // console.log(meals);
        })
    }

    //don't need this because we aren't updating the parameter
    // componentDidUpdate = async (prevProps) => {
    //     await api.getMealsByFavorites()
    //         .then(meals => {
    //             this.setState({
    //                 meals: meals.data.data,
    //                 isLoading: false,
    //             })
    //         })
    // }
   
    onRemoveFav = async (recipe) => {
        const payload = { fav: false }
        console.log(recipe);
        await api.updateFavorite(recipe._id, payload).then(res => {
            // window.alert(`Meal removed to favorites`);
            console.log('Meal removed from favorites')
            this.componentDidMount();
        })
    }

    onRecipeSelect(recipe) {
        this.setState({ selectedRecipe: recipe });
    }
    renderRecipe(recipe) {
        if (recipe != null) {
            return (
                <CardDetail
                   recipe = {recipe}
                />
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const recipes = this.state.meals.map(recipe => {
            //easier to console.log
            //className applies css to JSX
            return (
                <RecipeCard onClick={() =>
                    this.onRecipeSelect(recipe)}
                    recipe={recipe}
                    isOnFavPage = {true}
                    onRemoveFav={() =>
                        this.onRemoveFav(recipe)} />
            )
        })
        const { meals, isLoading } = this.state
        
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderRecipe(this.state.selectedRecipe)}
                    </div>
                </div>

                <div className="row">
                    {recipes}
                </div>


            </div>
            // <Wrapper>
            //     {showTable && (
            //         <ReactTable
            //             data={meals}
            //             columns={columns}
            //             loading={isLoading}
            //             defaultPageSize={10}
            //             showPageSizeOptions={true}
            //             minRows={0}
            //         />
            //     )}
            // </Wrapper>
        )
    }
}

export default Favorites