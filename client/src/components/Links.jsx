
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Meals Heals
                </Link>
                <Collapse>
                    <List>
                        <Item>
                           {/* Have button hyperlink to "/meals/list/:cuisine" */}
                           {/* Have button hyperlink to "/meals/list/:disease" */}
                            <Link to="/meals/list" className="nav-link">
                                List Recipes
                            </Link>
                        </Item>
                        <Item>
                            {/* maps are sexy */}
                            {/* check how to hyperlink to something with parameter */}
                            <Link to="/meals/list/vegan" className="nav-link">
                                Vegan
                            </Link>
                        </Item>
                        <Item>
                            {/* check how to hyperlink to something with parameter */}
                            <Link to="/meals/list/pollotarian" className="nav-link">
                                Delish Chicken
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/meals/create" className="nav-link">
                                Create Recipe
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    };
};

export default Links;