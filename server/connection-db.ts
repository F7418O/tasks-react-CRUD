import { connect } from "mongoose";

export const openConnection = async () => {const db = await connect('mongodb://localhost/tasks-react')
    console.log(db.connection.name)
}
/* .then((db) => console.log('Conectado a BD'))
.catch(error => console.log(error)) */

