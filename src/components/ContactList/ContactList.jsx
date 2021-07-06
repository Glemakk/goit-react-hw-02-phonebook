import React, { Component } from 'react'
import { List, Item } from './ContactList.styled'
import Button from '../Button/Button'

export default class ContactList extends Component {
  state = {
    isShow: false,
  }

  show = () => {
    this.setState({
      isShow: true,
    })
  }
  render() {
    const { contacts, onClick } = this.props
    // console.log(contacts)
    const { isShow } = this.state
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
