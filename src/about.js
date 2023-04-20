import React from 'react'
import './about.css'
export default function About
() {
  return (
    
       <section id="about">
    <div style={{backgroundImage:"url('data:image/jpeg;base64,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')",backgroundSize:'cover'}}>
      
      
      <center style={{color:"red"}}><h1>ABOUT US:</h1></center>
       <center style={{color:"yellow"}}><h3> 
       <h1>THE  ABSTRACT ORGAN OF YOUR LIFE </h1>
        <p>Quotes often open the eyes and the mind to understand truths and acknowledge things you otherwise would have missed.</p>
        <p> They let you see life from another, wider perspective, and in this sense, they expand the mind and the awareness.</p>
       <p>   Reading quotes can improve how you feel and change your mood for the better.</p>
     <p>Often a quote can offer inspiration for the week, and inspire us when our normal motivation has lapsed.</p>
     <p> A quote can act as an aide memoire to focus us towards a specific goal or plan of action.</p> 
     <p>'Keep it simple stupid' is a great example at this point, as it sums up the magnitude of quotes to deliver in a succinct way.</p></h3></center>
      
    </div>
    </section> 
    
  )
}
