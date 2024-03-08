import React from 'react'


export default function App1(props) {
  /* App1.defaultProps ={name:"Cathy",age:23}; */
  return (
  <div style={{color:'green'}}><h1>Hello {props.name}. are you {props.age}?</h1></div>
  );
};

App1.defaultProps ={name:"Cathy",age:23};
/* export default App1; */

