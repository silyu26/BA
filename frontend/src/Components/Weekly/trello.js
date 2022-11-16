import { useEffect, useState } from 'react'
import Board from 'react-trello'

const Trello = () => {
    const data = {
        lanes: [
          {
            id: 'lane1',
            title: 'To Do',
            label: '',
            cards: [
              {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', draggable: true},
              {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
          },
          {
            id: 'lane2',
            title: 'Doing',
            label: '',
            cards: []
          },
          {
            id: 'lane3',
            title: 'Finished',
            label: '',
            cards: []
          }
        ]
      }
      
      return(
        <div>
            <Board data={data} cardDraggable={true} />
        </div>
      )
}
export default Trello