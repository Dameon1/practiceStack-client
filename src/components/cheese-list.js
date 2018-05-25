import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses , fetchRecipes, postCheese,removeCheese } from '../actions/cheese';
import "./cheese.css";
export class  CheeseList extends React.Component {
  
//this is needed to populate the cheeses array
componentDidMount() {
  this.props.dispatch(fetchCheeses());
}

    
    handleSubmit(e){
      e.preventDefault();
      const value = this.input.value;
      this.props.dispatch(postCheese({title:value}));
      this.input.value = '';
      this.input.focus();
      this.props.dispatch(fetchCheeses());
  }
    
    render(){
        return (
          <ul>
            
            <button onClick={()=>this.props.dispatch(fetchCheeses())}>Hello</button>
            <button onClick={()=>this.props.dispatch(fetchRecipes())}>Hello</button>
            <h2>Add a Cheese</h2>
            <form id="cheeseForm" onSubmit={e=>this.handleSubmit(e)}>
            <input id='cheese' type="text"  ref={input => (this.input = input)}/>
            <button type="submit" onClick={(e)=>{this.handleSubmit(e);}} >Add cheese</button>
            </form>
              { this.props.cheeses.map((cheese,index) => (
               <li key={index} ref={index => (this.index = index)}>
                  {cheese.title}{console.log(cheese.title)}
                  <button onClick={()=>{this.props.dispatch(removeCheese(cheese.id))}}   className="delete" id="delete" >x</button>
               </li>
            ))}
          </ul>
        )
    }
}
const mapStateToProps = state => ({
    cheeses: state.cheeses || []
})
export default connect(mapStateToProps)(CheeseList) 

