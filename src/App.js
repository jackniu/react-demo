import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends React.Component {
    state = {
        todos: [
            { title: '看书', id: 1 },
            { title: '画画', id: 2 },
            { title: '弹琴', id: 3 },
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        })

        this.setState({
            todos,
        })
    }
    addTodo = (todo) => {
        // console.log(todo);
        todo.id = Math.random();
        const todos = [...this.state.todos, todo];
        this.setState({
            todos,
        })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">任务列表</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;
