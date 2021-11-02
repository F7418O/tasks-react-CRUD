import { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { createTask } from "../services/TaskService";

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (title === "" || description === "")
            return

        const task = {
            title,
            description,
        }

        console.log(task)

        const res = await createTask(task)

        console.log(res)

        setTitle('')
        setDescription('')
    }

    return (
        <div className='col-md-4 offset-md-4'>
            <Form onSubmit={handleSubmit} className="card card-body">
                <h1 className='text-center'>Create Task</h1>
                <FormGroup className="mb-3">
                    <FormControl
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormControl
                        as="textarea"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </FormControl>
                </FormGroup>
                <Button
                    type="submit" className="btn-success">Save</Button>
            </Form> 
        </div> 
    )
}

export default TaskForm