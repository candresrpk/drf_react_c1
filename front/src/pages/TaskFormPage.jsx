import {useForm} from 'react-hook-form'
import {createTask} from '../api/tasks.api'
import {useNavigate} from 'react-router-dom'


const TaskFormPage = () => {

  const {register, handleSubmit, formState: {
    errors
  }} = useForm()

  const navigate = useNavigate()
  
  const submit = handleSubmit(async data => {

    if (data.type === 'Expense'){
      data.amount = data.amount * -1
    }

    await createTask(data)
    navigate('/tasks')
  })

  return (
    <div>
      <h1>Create Task</h1>
      <form action="" onSubmit={submit}>

        <input type="text" placeholder="Title" 
        {...register("title", {required: true})}
        />

        {errors.title && <span>This field is requires</span>}

        <input type="number"  placeholder="$0.00"
        {...register("amount", {required: true})}
        />

        {errors.amount && <span>This field is requires</span>}


        <select name="" id="" {...register("type", {required: true})}>
          <option value="Income" >Income</option>
          <option value="Expense">Expense</option>
        </select >

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default TaskFormPage