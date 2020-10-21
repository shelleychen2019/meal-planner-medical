
import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import RecipeCard from './RecipeCard'
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

    onRecipeSelect(recipe) {
        this.setState({ selectedRecipe: recipe });
    }
    renderRecipe(recipe) {
        if (recipe != null) {
            return (
                <RecipeCard
                    name={recipe.name}
                    picture={recipe.picture}
                    cuisine={recipe.cuisine}
                    video={recipe.video}
                    instructions={recipe.instructions}
                    main_ingredient={recipe.main_ingredient}
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
                    recipe={recipe} />
            )
        })
        const { meals, isLoading } = this.state

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Instructions',
                accessor: 'instructions',
                filterable: true,
                Cell: props => <span>{props.value.map(e => <span> {e} <br></br> </span>)}</span>,

            },
            {
                Header: 'Diet',
                accessor: 'cuisine',
                // Cell: props => <span>{props.value.join(' / ')}</span>,
                Cell: props => <span>{props.value}</span>
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteMeal id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateMeal id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!meals.length) {
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