import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [Index, setIndex] = useState(1);
  const {name, job, image, text} = people[Index]

  /*
    Evita que el valor de newIndex sea negativo o más grande
    que el último item del arreglo (people)
  */
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length -1;
    }
    return number;
  }

  // Pasar a la siguiente persona
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // Regresar a la persona anterior
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Muestra una persona al azar
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === Index) {
      randomNumber = Index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
    
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>

      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>

    </div>
    <button className='random-btn' onClick={randomPerson}>
      Suprise Me
    </button>
  </article>;
};

export default Review;
