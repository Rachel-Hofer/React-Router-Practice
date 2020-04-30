import React, { Component } from 'react';
import Card from './Card';

const Home = (props) => {
  return (
    <div className="Grid animated bounceInUp">
      {props.cards.map((card, key) => {
        return (
          <Card
            duration={150}
            key={key}
            card={card}
          />
        )
      })

      }
    </div>
  )
}

export default Home;
