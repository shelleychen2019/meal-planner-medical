
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

const Button = styled.button.attrs({
    className: `btn btn-secondary btn-lg btn-block`,
})`
    margin: 15px 15px 15px 5px;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    lovely meals
                </Link>
                <Collapse>
                <List>

                    <Item>
                        {/* Have button hyperlink to "/meals/list/:anycuisine" */}
                        <Button>
                            <Link to="/meals/list" className="nav-link">
                                All Recipes
                            </Link>
                        </Button>
                    </Item>
                    <Item>
                        {/* maps are sexy */}
                        {/* check how to hyperlink to something with parameter */}
                        <Button>
<Link to="/meals/list/vegan" className="nav-link">
                            Vegan
                            </Link>
                            </Button>
                    </Item>
                    <Item>
                       
                        {/* check how to hyperlink to something with parameter */}
                         <Button>
                             <Link to="/meals/list/pollotarian" className="nav-link">
                            Delish Chicken
                            </Link>
                            </Button>
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