import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
    const [values, setValues] = useState(0);

    const { image, name, title, quote} = data[values];

    const changeValues = (type) => {
      if(type === 'next'){
        setValues(values + 1)
      } else {
        setValues(values - 1)
      }
    }

  return (
    <section className='section'>
      <div className="title">
         <h2><span>/</span> Reviews</h2>
      </div>
      <section className='section-center'>

        <article>
           <img src={image} alt={name} className="person-img"/>

           {values > 0 &&
           <FiChevronLeft className="prev" onClick={() => changeValues('prev')}/>
           }

        <h4>{name}</h4>
        <p className="title">{title}</p>
        <div className="text">{quote}</div>

        {values < data.length - 1 &&
          <FiChevronRight className="next" onClick={() => changeValues('next')}/>
        }
          <FaQuoteRight className="icon"/>

        </article>

      </section>
    </section>
  );
}

export default App;
