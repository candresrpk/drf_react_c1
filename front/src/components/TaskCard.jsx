const TaskCard = ({task}) => {
  return (
    <div >
        <h1>{task.title}</h1>
        <p>{task.amount}</p>
        <p>{task.type}</p>
        <hr />

    </div>
  )
}

export default TaskCard