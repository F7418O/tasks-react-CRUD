import './App.css';
import NavBar from './components/NavBar.js'
import {  Route, Switch } from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <div >
      <NavBar/>
      <div className="container p-5"> 
      <Switch>
        <Route path="/tasks/new" component={TaskForm} ></Route>
        <Route path="/tasks/:id" component={TaskDetail} ></Route>
        <Route path="/" component={TaskList} exact></Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
