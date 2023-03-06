import React from 'react';
import './App.css';

interface ICard {
  id: number
  order: number
  label: string
}

function App() {

  const cards = [
    {id: 1, order: 1, label: "FIRST"},
    {id: 2, order: 2, label: "SECOND"},
    {id: 3, order: 3, label: "THIRD"},
    {id: 4, order: 4, label: "FOURTH"}
  ]

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    console.log('dragStart', card);
    
  }
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    
  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    e.preventDefault()
    console.log('DROP', card);
  }

  return (
    <div className="App">
      {cards.map(card => (
        <div key={card.id} className='card'
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
        >
          {card.label}
        </div>
      ))}
    </div>
  );
}

export default App;
