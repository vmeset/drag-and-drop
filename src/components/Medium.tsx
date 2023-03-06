import React, { useState } from 'react'

interface IItem {
  id: number
  label: string
}

interface IBoard {
  id: number
  title: string
  items: IItem[]
}

function Medium() {
  const [boards, setBoards] = useState<IBoard[]>([
    {id: 1, title: 'BOARD1', items: [
      {id: 1, label: "ONE"},
      {id: 2, label: "TWO"},
      {id: 3, label: "THREE"},
    ]},
    {id: 2, title: 'BOARD2', items: [
      {id: 4, label: "FOUR"},
      {id: 5, label: "FIVE"},
      {id: 6, label: "SIX"},
    ]},
    {id: 3, title: 'BOARD3', items: [
      {id: 7, label: "SEVEN"},
      {id: 8, label: "EIGHT"},
      {id: 9, label: "NINE"},
    ]}
  ])
  const [currentItem, setCurrentItem] = useState<IItem | null>(null)
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null)

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: IBoard, item: IItem) => {
    setCurrentItem(item)
    setCurrentBoard(board)
  }
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    target.style.boxShadow = 'none'
  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    target.style.boxShadow = 'none'
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement
    if(target.className == 'item') {
      target.style.boxShadow = '0 4px 3px green'
    }
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, board: IBoard, item: IItem) => {
    e.preventDefault()
    if(currentBoard && currentItem) {
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      const dropIndex = board.items.indexOf(item)
      board.items.splice(dropIndex + 1, 0, currentItem)
      setBoards(boards.map((b: IBoard) => {
        if(b.id === board.id) {
          return board
        }
        if(b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      }))
    }
  }

  return (
    <div className='easy'>
      {boards.map((board: IBoard) => (
        <div key={board.id} className='board'>
          <h2 className='title'>{board.title}</h2>
          {board.items.map((item: IItem) => (
            <div key={item.id} className='item'
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Medium