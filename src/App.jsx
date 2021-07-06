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

  // findContact = () => {
  //   const {contacts} = this.state
  //   return this.setState({contacts.find(contact => contact.name.includes(name))})
  // }
  handleChange = ({ currentTarget }) => {
    const value = currentTarget.value
    const name = currentTarget.name
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

    const { name, number, contacts } = this.state
    // const findContact = contacts.find((contact) => console.log(contact.name))
    // const findContact = contacts.find((contact) => contact.name.includes(name))
    // console.log(findContact)

    const findContact = contacts.find((contact) => contact.name.includes(name))

    findContact
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [...contacts, { id: randomID, name: name, number: number }],
        })
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ number: '', name: '' })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter),
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
    const { name, number, filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          // contacts={contacts}
          name={name}
          number={number}
          onChange={this.handleChange}
        />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter} />
        <ContactList contacts={visibleContacts} onClick={this.deleteContact} />
      </Container>
    )
  }
}
