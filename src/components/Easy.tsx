import React, { useState } from 'react'

interface ICard {
  id: number
  order: number
  label: string
}

function Easy() {

  const [cardsList, setCardsList] = useState<ICard[]>(
    [
      {id: 1, order: 1, label: "FIRST"},
      {id: 2, order: 2, label: "SECOND"},
      {id: 3, order: 3, label: "THIRD"},
      {id: 4, order: 4, label: "FOURTH"}
    ]
  )
  const [currentCard, setCurrentCard] = useState<ICard | null>(null)

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    setCurrentCard(card)
  }
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.background = 'white'
  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.background = 'white'
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement;
    target.style.background = 'lightgray'
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement;
    target.style.background = 'white'
    setCardsList(cardsList.map((element: ICard) => {
      if(element.id === card.id){
        return {...element, order: currentCard!.order}
      }
      if(element.id === currentCard!.id){
        return {...element, order: card.order}
      }
      return element
    }))
  }

  const sortCards = (a: ICard, b: ICard) => {
    if(a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div>
      <h1>Easy</h1>
      <div className="easy">
        {cardsList.sort(sortCards).map(card => (
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
    </div>
  )
}

export default Easy