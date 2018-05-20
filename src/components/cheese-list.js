import React from 'react';



export default function Cheeselist (props) {
    let cheeses = props.cheeses.map(cheese => {
      return <li>{cheese}</li>
    });
    
    return (
      <ul>
        {cheeses}
      </ul>
    )


}




