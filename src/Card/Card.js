import './Card.css';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export default function Card({ title, image, showDetails, description, author, content, url, id }) {
    const [ref, inView] = useInView({
      triggerOnce: true, 
      threshold: 0.2, 
    });
  
    return (
      <main to={`/${id}`} className='card-link'>
        <section
          ref={ref}
          style={{ cursor: 'pointer' }}
          className={`card ${inView ? 'fade-in' : ''}`}
        >
          <div className='news-info'>
            <h3 className='title'>{title}</h3>
            {image && <img className='image' src={image} alt={title} />}
            <h3 className='author'>{author}</h3>
            <p className='description'>{description}</p>
            <p className='content'>{content}</p>
            <p className='url'>{url}</p>
          </div>
        </section>
      </main>
    );
  }

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showDetails: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};