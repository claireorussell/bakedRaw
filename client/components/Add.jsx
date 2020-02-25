import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { addRecipes } from '../actions'

class Add extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe: {
                name: '',
                serves: 0,
                ingredients: [],
                method: [],
            },
            newIngredient: '',  // holds the input event value 
            filteredIngredients: [], // the filtered ingredients from allIngredients based on React Bloodhound 
            allIngredients: ['chocolate', 'desiccated coconut', 'oats', 'maple syrup', 'honey', 'almond milk', 'cacao powder', 'coconut butter', 'cashews', 'almonds', 'dates', 'coconut oil', 'peanut butter', 'brown rice syrup', 'vanilla extract'], // words it will filter through as possible suggestions 
            methodStep: '', 
            methodCollect: [],
        }   
    }
    onChangeIngredients = (evt) => {
        let newIngredient = evt.target.value
        //spread operator the ingredients array 
        this.setState({ 
            newIngredient: newIngredient,
            filteredIngredients: this.state.allIngredients.filter(ingredient => ingredient.includes(newIngredient))
                
        })
    }

    ingredientKeyPress = (evt) => {
       
        //if statement for charCode == 13
        if(evt.charCode == 13){
            this.setState({
                recipe: {
                    ...this.state.recipe, 
                    ingredients: [...this.state.recipe.ingredients, this.state.newIngredient]
                },
                newIngredient: '',
                filteredIngredients: [],
            })
        }
    }

    onChangeMethod = (evt) => {
        let methodStep = evt.target.value
        this.setState({
            methodStep: methodStep, 
        })
    }
    
    methodKeyPress = (evt) => {
       if(evt.charCode == 46){
           this.setState({
               recipe: {
                   ...this.state.recipe, 
                   method: [...this.state.recipe.method, this.state.methodStep]
               },
               methodStep: ''
           })
       }
    }


    
    handleChange = (evt) => {
        this.setState({
            recipe: {
                    ...this.state.recipe,
                    [evt.target.name]: evt.target.value
            }
                })
    }

    handleSubmit = (evt) => {
       evt.preventDefault()
        // this.props.dispatch(addRecipe(this.state.recipe))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Share your yums</h2>
                <form >
                    <div>
                    <label>Baked name: </label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.recipe.name}
                        onChange={this.handleChange}
                    />
                    </div>
<div>
                    <label>Serving number: </label>
                    <input
                        type='text'
                        name='serves'
                        value={this.state.recipe.serves}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <label>Ingredients list and quantity: </label>
                    <input
                        type='text'
                        name='ingredients'
                        value={this.state.newIngredient} 
                        onChange={this.onChangeIngredients}
                        onKeyPress={this.ingredientKeyPress}
                    /> 
                    {this.state.filteredIngredients.map(ingredient => <li>{ingredient}</li>)}
                    {this.state.recipe.ingredients.map(ingredient => <p>{ingredient}</p>)}
                    </div>
                    <div>
                    <label>Method:</label>
                    <input
                        type='text'
                        name='method'
                        value={this.state.methodStep}
                        onChange={this.onChangeMethod}
                        onKeyPress={this.methodKeyPress}
                    />
                    </div>
                    <input className="btnNext" type="submit"
                    onClick={this.handleSubmit}></input>
                    
                </form>
                 
            </div>
        )
    }
}

export default connect()(Add)