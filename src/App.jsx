import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import Container from './components/Container/Container'
import { v4 as uuidv4 } from 'uuid'

export default class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    filter: '',
  }

  handleChange = ({ currentTarget }) => {
    const value = currentTarget.value
    const name = currentTarget.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (name, number) => {
    const randomID = uuidv4()
    const newContact = { id: randomID, name, number }

    const findContact = this.state.contacts.find((contact) =>
      contact.name.includes(name),
    )

    findContact
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }))
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }))
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter} />
        <ContactList contacts={visibleContacts} onClick={this.deleteContact} />
      </Container>
    )
  }
}
