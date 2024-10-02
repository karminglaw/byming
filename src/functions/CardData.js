import React from 'react';
import FlippingCard from '../components/FlippingCard';

const CardDataComponent = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <FlippingCard
          key={index}
          frontImageUrl={card.frontImageUrl}
          title={card.title}
          items={card.items}
        />
      ))}
    </>
  );
};

export default CardDataComponent;