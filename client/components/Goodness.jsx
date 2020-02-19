import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/index'
import Home from './Home'


class Goodness extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchRecipes())
    }

    handleClick() {
        this.props.dispatch(fetchRecipes())
    }


    render() {
        const recipes = this.props.recipes
        const recipe = recipes[Math.ceil(Math.random() * recipes.length - 1)]
        console.log(recipe)

        return (
            <div className='container'>
                {recipe && <section>
                    <h3 className='recipeName'>{recipe.name}</h3>
                    <div className='recipeBody'>
                    <div className='ingredientList'>
                        <h4>Serves: {recipe.serves}</h4>
                        <h4>Ingredients </h4>
                        {recipe.ingredients.map(ingredient => {
                            return <li>{ingredient}</li>
                        })}
                        </div>
                        <div className='method'>
                            <h4>Method </h4>
                            {recipe.method.map(task => {
                                return <p>{task}</p>
                            })}
                        </div>
                        <div className='bottomButtons'>
                            <Link to='/' className='linkHome'><button className='btnNext'>Take me home</button></Link> 
                            <button className='btnNext' onClick={this.handleClick} >Nope, new recipe</button>
                            </div>
                        </div>
                </section>}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Goodness)