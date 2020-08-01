import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <div className="card">
        <p>{props.todo.todo_description}</p>
        <p><Link to={"/edit/"+props.todo._id}>Edit</Link></p>
    </div>
    /*<tr>
        <td className={props.todo.todo_column}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_column}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>*/
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/kanban/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            let currentColumn;
            if (currentTodo.todo_column) {
                currentColumn = currentTodo.todo_column;
            } else {
                currentColumn = "ToDo";
            }
            const res = <div className={currentColumn}><Todo todo={currentTodo} key={i} /></div>
            return res;
        })
    }

    render() {
        return (
            /*
            <div>
                <h3>Todos List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ToDo</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>*/
            <div>
                { this.todoList() }
            </div>
        )
    }
}