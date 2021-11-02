import { Router } from "express";
import  Task from '../model/Task'

const routes = Router();

routes.get('/tasks', async (req, res) => {
    const tasks = await Task.find()

    res.send(tasks)
})

routes.post('/tasks', async (req, res) => {
    const { title ,description } = req.body
    

    const task = new Task({
        title,
        description
    })

    await task.save()
    return res.json(task)
})
routes.get('/tasks/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)

    return res.send(task)
})

routes.put('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body)

    return res.json(task)
})

routes.delete('/tasks/:id', async (req, res) => {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id)

    return res.json(taskDeleted)
})

export default routes