import React, { Component } from 'react'
import { List, Item } from './ContactList.styled'
import Button from '../Button/Button'

export default class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props

    return (
      <List>
        {contacts.map((contact) => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              type="button"
              text="Delete"
              onClick={() => onClick(contact.id)}
            />
          </Item>
        ))}
      </List>
    )
  }
}
