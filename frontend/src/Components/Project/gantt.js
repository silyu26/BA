import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import { useEffect, useState } from 'react'
import "gantt-task-react/dist/index.css";

const Chart = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const cleanUp = false
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/plan')
      const json = await response.json()
      console.log("json: ",json)
      if(response.ok && !cleanUp && (json !== null)) {
        const data1 = []
        let i = 0

        while(i < 3) {
          data1.push({
            /*
            start: new Date(json[i].startDate),
            end: new Date(json[i].endDate),
            // start: new Date(2020, 6, 1),
            // end: new Date(2020, 10, 2),
            name: json[i].content,
            id: json[i]._id,
            type:'task',
            progress: 45,
            isDisabled: true,
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            */
            start: new Date(2020,5,1),
            end: new Date(2020, 9, 1),
            name: 'Idea',
            id: 'Task 0',
            type:'task',
            progress: 45,
            isDisabled: true,
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }
          })
          i++
        }
        console.log("data1: ",data1)
        setData(data1)
      }
      return () => {
        cleanUp = true
      }
    }
    fetchData()
  }, [])
    
    const task = [
        {
          start: new Date(2020,5,1),
          end: new Date(2020, 9, 1),
          name: 'Idea',
          id: 'Task 0',
          type:'task',
          progress: 45,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }
        },
        {
            //start: new Date(2020, 5, 26),
            end: new Date(2020, 11, 2),
            type:'task',
            name: 'Celebrate',
            isDisabled: true,
            start: new Date(2020, 5, 26),
            progress: 80,
            id: 'Task 1',
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }
          },
          {
            start: new Date(2020, 5, 1),
            end: new Date(2020, 9, 2),
            name: 'Learning',
            id: 'Task 2',
            type:'task',
            progress: 20,
            isDisabled: true,
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
          }
    ]
    
    return(
        <div>
            <Gantt tasks={task} viewMode={"Week"} preStepsCount={1} />
        </div>
    )
}
export default Chart