import React from 'react';
import './App.css';
import AddContact from './AddContact';
import Contact from './Contact';

class App extends React.Component {
  state = {
    contactForm:[
      { name: 'Jane', age: 18, sex: 'female', id:1 },
      { name: 'Tom', age: 19, sex: 'male', id:2 },
      { name: 'Bruce', age: 21, sex: 'male', id:3},
    ]
  }

  addContact = (contact) => {
    contact.id = Math.random();
    // console.log(contact);
    let contactForm = [...this.state.contactForm, contact];
    this.setState({
      contactForm: contactForm,
    })
  }

  deleteContact = (id) => {
    console.log(id);
    let contactForm = this.state.contactForm.filter(contact => {
      return contact.id !== id;
    })
    this.setState({
      contactForm: contactForm,
    })
  }

  render() {
    return (
      <div className="App">
        <Contact contactForm={this.state.contactForm} deleteContact={this.deleteContact} />
        <AddContact addContact={this.addContact} />
      </div>
    );
  }
}

export default App;
