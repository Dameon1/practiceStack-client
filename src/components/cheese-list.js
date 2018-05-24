import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class  CheeseList extends React.Component {
  
//this is needed to populate the cheeses array
componentDidMount() {
  this.props.dispatch(fetchCheeses());
}
    
    render(){
        return (
          <ul>
            <button onClick={()=>this.props.dispatch(fetchCheeses())}>Hello</button>
            <button onClick={()=>console.log("Hello")}>Hello</button>
              {this.props.cheeses.map((cheese,index) => (
               <li key={index}>
                 {cheese}
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





  // fetchCheeses = () => {
  // this.props.dispatch(fetchCheeses());
// }
//     let cheese = fetchCheeses();
//     console.log(cheese);

    
// render(){
//   let cheeses = props.cheeses.map((cheese,index) => {
//       return <li key={index}>{cheese}</li>
//     });
// render(){
//   let cheeses = ['gooda'];
//     return (
//       <ul>
//         {cheeses}
//         <button onClick={()=>this.props.dispatch(fetchCheeses())}>Hello</button>
//       </ul>
//     )
//   }



 

// render(){
  
//     return (
//       <ul>
//         {this.props.cheeses.map(cheese => (
//                     <li >{cheese}</li>
//                 ))}
        
//         <button onClick={()=>fetchCheeses()}>Hello</button>
//       </ul>
//     )
//   }
// }





