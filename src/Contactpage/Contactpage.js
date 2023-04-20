import React from 'react';
import '../Contactpage/Contactpage.css'

function Contact() {
  return (
    <section id="contact">
    <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDsCtQaqs1ISuqFOWZLRsu04nxwPeUGBpuA&usqp=CAU')",backgroundSize:'cover'}}>
      
      
      <center><h1 style={{color:"red"}} >CONTACT US:</h1></center>
        <label><h1 style={{color:"red"}}>Name:</h1></label>
          <h2 style={{color:"yellow"}}>HARIHARA KAILASA RAMAN S</h2>

        <label><h1 style={{color:"red"}}>EMAIL:</h1></label>
        <h2 style={{color:"yellow"}}>kailasaraman2004@gmail.com</h2>

        <label><h1 style={{color:"red"}}>MOBILE:</h1></label>
        <h2 style={{color:"yellow"}}>+91 7548844927</h2>

        <label><h1 style={{color:"red"}}>REFERENCE:</h1></label>
        <center><h2 style={{color:"red"}}><a href="https://in.linkedin.com/">Linkedin</a></h2></center>
        <center><h2 style={{color:"white"}}><a href="https://github.com/">Github</a></h2></center>

      
    </div>
    </section>
  );
}

export default Contact;
