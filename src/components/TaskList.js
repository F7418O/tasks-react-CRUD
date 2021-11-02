import { useEffect, useState } from "react"
import { getTasks } from "../services/TaskService";
import {Link} from "react-router-dom";

function TaskList(){

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const ts = await getTasks()
        setTasks(ts.data)
        console.log(ts)
    }
    useEffect(() => {
        loadTasks()
    },[])

    return(
        <div>
            <ul className="list-group">
                {tasks.map((t, i) => (
                    <li key={t._id} 
                    className="list-group-item list-gruop-item-action"
                    >
                    {i+1}: <Link to={'/tasks/'+t._id}>
                         { t.title}
                    </Link>
                    </li>
                ))}
            </ul> 
        </div>
    )
}

export default TaskList