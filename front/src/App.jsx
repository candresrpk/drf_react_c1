import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import Navigation from './components/Navigation'



function App() {

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/'  element={<Navigate to='/tasks' />}/>
        <Route path='/tasks' element={<TasksPage/>} />
        <Route path='/tasks/create' element={<TaskFormPage/>} />
      </Routes>
    </Router>
  )
}

export default App
