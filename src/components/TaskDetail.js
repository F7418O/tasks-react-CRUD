import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useParams , useHistory } from 'react-router-dom'
import { deleteTask, getTask, updateTask } from "../services/TaskService";

function TaskDetail(){

    const params = useParams()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleUpdate = async (e) => {
        e.preventDefault()

        if(title ==='' || description ==='')
            return

        const task = {
            title,
            description
        }
        const res = await updateTask(params.id, task)
        console.log(res.data)
        history.push('/tasks')
    }

    const handleDelete = async () => {
        const id = params.id
        const res = await deleteTask(id)

        console.log(res.data)
        history.push('/tasks')
    }

    const loadTask = async ()=> {
        const id = (params.id)
        const res = await getTask(id)

        /* console.log(res.data) */
        setTitle(res.data.title)
        setDescription(res.data.description)
    }

    useEffect(() => 
    {
        loadTask()
    }, [])

    return(
    <div className="col-md-4 offset-md-4">
         <Form className="card card-body" onSubmit={handleUpdate} >
                <h1 className='text-center'>Update Task</h1>
                <FormGroup className="mb-3">
                    <FormControl
                        type="text"
                        placeholder="Update Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        ></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormControl
                        as="textarea"
                        value={description}
                        placeholder="Update Description"
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </FormControl>
                </FormGroup>
                <Button
                    type="submit" className="btn-success mb-3">Update
                </Button>
                <Button onClick={handleDelete}
                    className="btn btn-danger"
                    >
                    Delete
                </Button>
            </Form> 
    </div>)
}

export default TaskDetail;