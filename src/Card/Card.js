import './Card.css';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export default function Card({ title, image, date, showDetails, description, author, content, url}) {
    const [ref, inView] = useInView({
      threshold: 0.2, 
    });

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
            <h3 className='author'>Author: {author}</h3>
            <p className='description'>{description}</p>
            <p className='content'>{content}</p>
            <p className='date'>{date}</p>
            <p className='url'>{url}</p>
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
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};