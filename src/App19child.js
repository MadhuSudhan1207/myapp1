import React from 'react'
export default function App19child(props) {
  return (
    <div style={{backgroundColor:'silver', textAlign:'center',display:'flex',justifyContent:'center'}}>
        {props.children}
    </div>
  )
}