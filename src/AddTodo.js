import React from 'react'

class AddTodo extends React.Component {
    state = {
        title: '',
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>添加新任务：</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title} />
                </form>
            </div>
        )
    }
}

export default AddTodo
