import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import TaskCard from '../components/TaskCard'

const TasksList = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() =>{

    async function loadTasks() {
      const res = await getAllTasks()
      setTasks(res.data)
    }

    loadTasks()

  }, [])

  return (
    <div>
      {
        tasks.map(task => (
          <TaskCard  key={task.id} task={task}/>
        ))
      }

    </div>
  )
}

export default TasksList