import instance from './axios'

export const createTask = async (task) => {
    const tsk = await instance.post('/tasks', task)

    
    console.log('error create')
    
    return tsk
}

export const getTasks = async () => {
    return await instance.get('/tasks')
}

export const getTask = async (id) => {
    return instance.get('/tasks/'+id)
}

export const updateTask = async (id, task) => {
    return instance.put('/tasks/'+id, task)
}

export const deleteTask = async (id) => {
    return instance.delete('/tasks/'+id)
}