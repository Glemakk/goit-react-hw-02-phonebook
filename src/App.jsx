import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Container from './components/Container/Container'
import { v4 as uuidv4 } from 'uuid'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = ({ target }) => {
    const value = target.value
    const name = target.name
    // console.log('value=>', value)
    this.setState({
      [name]: value,
    })
  }

  //   addContact = () => {
  //     this.setState((prevState) => ({
  //       contacts: [...prevState.contacts, this.state.name],
  //     }))
  //   }

  handleSubmit = (e) => {
    e.preventDefault()
    const randomID = uuidv4()

    const { name, number } = this.state
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { id: randomID, name: this.state.name, number: this.state.number },
      ],
    }))
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ number: '', name: '' })
  }

  render() {
    const { contacts, name, number } = this.state
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          contacts={contacts}
          name={name}
          number={number}
          onChange={this.handleChange}
        />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={contacts} name={name} />
      </Container>
    )
  }
}
