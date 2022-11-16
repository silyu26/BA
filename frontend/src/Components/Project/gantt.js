import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const Chart = () => {
    
    const task = [
        {
          start: new Date(2020, 6, 1),
          end: new Date(2020, 10, 2),
          name: 'Idea',
          id: 'Task 0',
          type:'task',
          progress: 45,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        },
        {
            start: new Date(2020, 5, 26),
            end: new Date(2020, 11, 2),
            name: 'Celebrate',
            id: 'Task 1',
            type:'task',
            progress: 80,
            isDisabled: true,
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
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