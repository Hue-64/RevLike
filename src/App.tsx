import "./style.css"
import { useState } from 'react';
import { testimonies } from './data.tsx';




export default function Testimonies() {
  
    const [index, setIndex] = useState(0);
  
    function handleNextClick() {
      if(index < 3){
        setIndex(index + 1);
      }
      else{
        setIndex(0);
      }
    }

    function handlePrevClick() {
      if(index > 0){
        setIndex(index + 1);
      }
      else{
        setIndex(3);
      }
    }

    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randomSelection(){
      setIndex(randomIntFromInterval(0, 3))
    }



    const revList = testimonies[index];
    return (
      
      <><main>
        <article className = "review">
          <div className = "img-container">
            <img src = {revList.url} alt={revList.author} className="person-img"/>
            <span className = "quote-icon">"</span>
          </div>
          <h4 className = "author">{revList.author}</h4>
          <p className = "job">{revList.job}</p>
          <p className = "info">
            {revList.info}
          </p>
          <div className = "btn-container">
            <button className = "prev-btn" onClick = {handlePrevClick}>Back</button>
            <button className = "next-btn" onClick = {handleNextClick}>Next</button>
          </div>
          <button className = "btn btn-hipster" onClick = {randomSelection}>surprise me</button>
        </article>
        </main>
      </>
    );
  }
