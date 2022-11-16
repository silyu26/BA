import { useEffect, useState } from 'react'
import Board from 'react-trello'

const Trello = () => {
    const [d,setD] = useState(null)
     useEffect(() => {
        const data = {
            lanes: [
              {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                  {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
                  {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                ]
              },
              {
                id: 'lane2',
                title: 'Completed',
                label: '0/0',
                cards: []
              }
            ]
          }
          setD(data)
     })
      
      return(
        <div>
            <Board data={d} />
        </div>
      )
}
export default Trello