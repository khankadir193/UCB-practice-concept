import React from 'react';
import './pinpongStyle.css'; // Assuming you have a CSS file for styling
import Paddle from './Paddle';
import Ball from './Ball';

const GameCanvas = () => {
  return (
    <div className='game-canvas'>
      <Paddle />
      <Ball />
    </div>
  )
}

export default GameCanvas;


//https://www.geeksforgeeks.org/reactjs/ping-pong-game-using-react/
