import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
        <h1>
            tasks app
        </h1>
        <nav>
            <ul>
                <li><Link to='/tasks'>Tasks</Link></li>
                <li><Link to='/tasks/create'>Create Task</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation