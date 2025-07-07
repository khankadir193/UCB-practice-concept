import React from 'react'
import GameCanvas from './GameCanvas';
import ScoreBoard from './ScoreBoard';

const MainGameContainer = () => {
  return (
    <div>
      <GameCanvas />
      <div className='game-controls'>
        <button className='start-button'>Start Game</button>
        <button className='pause-button'>Pause Game</button>
        <button className='reset-button'>Reset Game</button>
      </div>
      <ScoreBoard />
    </div>
  )
}

export default MainGameContainer;
