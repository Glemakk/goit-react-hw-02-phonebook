import React, { Component } from 'react'
import { List, Item } from './ContactList.styled'

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
    const { contacts } = this.props
    const { isShow } = this.state
    return (
      <List>
        {contacts === ''
          ? isShow
          : contacts.map((contact) => (
              <Item key={contact.id}>
                {contact.name}: {contact.number}
              </Item>
            ))}
      </List>
    )
  }
}

//=========================================================================
// function ContactList({ contacts, name }) {
//   return (
//     <List>
//       {contacts.map((contact) => (
//         <li>{contact}</li>
//       ))}
//     </List>
//   )
// }

// export default ContactList
