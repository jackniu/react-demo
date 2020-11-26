import React from 'react';

class AddContact extends React.Component {
    state = { 
        name: null,
        age: null,
        sex: null,
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addContact(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="addContact">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="sex">Sex:</label>
                        <input type="text" id="sex" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;