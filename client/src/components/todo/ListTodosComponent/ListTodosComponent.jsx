import React, {Component} from 'react';

export default class ListTodosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    description: "Learn React",
                    done: false,
                    targetDate: new Date()
                },
                {
                    id: 2,
                    description: "Learn Vue",
                    done: false,
                    targetDate: new Date()
                },
                {
                    id: 3,
                    description: "Learn Angular",
                    done: false,
                    targetDate: new Date()
                }
            ]
        };
    }
    render() {
        const { todos } = this.state;

        return (
            <div>
                <h1>List Todos</h1>

                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                        </thead>

                        <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
