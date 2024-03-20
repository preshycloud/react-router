import React from 'react';

const Card = ({title, description, price, imageUrl}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-price'>{price}</p>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
      
    </div>
  );
}

export default Card;
