import axios from 'axios'


const tasksAPI = axios.create({
    baseURL: 'http://127.0.0.1:3000/transactions/api/v1/transactions'
})


export const getAllTasks = () => {
    return tasksAPI.get('/')
}

export const createTask = (task) => {
    return tasksAPI.post('/', task)
}


