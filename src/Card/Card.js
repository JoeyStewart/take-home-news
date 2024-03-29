import './Card.css';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import React from 'react';

export default function Card({ title, image, date, showDetails, description}) {
    const [ref, inView] = useInView({
      threshold: 0.2, 
    });
    const slicedDate = date.slice(0, 10);
    
    return (
      <main to={`/${title}`} className='card-link'>
        <section
          ref={ref}
          style={{ cursor: 'pointer' }}
          className={`card ${inView ? 'fade-in' : ''}`}
          onClick={() => showDetails(title)}
        >
          <div className='news-info'>
            <h3 className='title'>{title}</h3>
            {image && <img className='image' src={image} alt={title} />}
            <p className='description'>{description}</p>
            <p className='date'>{slicedDate}</p>
          </div>
        </section>
      </main>
    );
  }

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string, 
  showDetails: PropTypes.func.isRequired,
  description: PropTypes.string,
};