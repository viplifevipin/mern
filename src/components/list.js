import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor (props){
        super(props);
        this.state={todos:[]}
    }

componentDidMount(){
    axios.get('http://localhost:5000/todos/todos')
    .then((res)=>{
        this.setState({todos:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

    render() {
        return (
            <div>
                <h3>TodoList</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thread>
                        <tr>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Responsible</th>
                            <th>Action</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.TodosList}
                    </tbody>
                </table>
            </div>
        )
    }
}