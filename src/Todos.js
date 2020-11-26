import React from 'react'

const Todos = (props) => {
    const { todos, deleteTodo } = props;
    const todoList = todos.length ? (todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
                <div onClick={() => deleteTodo(todo.id)}>{todo.title}</div>
            </div>
        )
    })) : (
            <p className="center">恭喜你完成了所有的待办事项！</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos
