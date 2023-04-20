import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Contact from './Contactpage/Contactpage';
import About from './about';
import Footer from './footer';

function QuoteImageGenerator() {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const fetchImage = () => {
    axios.get('https://source.unsplash.com/1600x900/?animal')
      .then(response => {
        setImage(response.request.responseURL);
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  return (
    <>
    <section id='home'>
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
        <Header/>
    
    <h1 style={{backgroundColor:"white" }}> THE IMPACT YOU NEED IN LIFE IS DOWN HERE</h1>
      <button className="button" onClick={() => { fetchQuote(); fetchImage(); }} style={{ backgroundColor:"white" }}>QUOTES</button>
      {quote && <p className="quote">{quote}</p>} 
      <h2 style={{ backgroundImage: `url(${image})`,backgroundSize: 'cover',color:"yellow"}}><p><h2>-{author}</h2></p></h2>
      <Footer/>
    
    
    </div>
    </section>
    
    <About/>
    <Contact/>
    

    </>
  );
}

export default QuoteImageGenerator;


