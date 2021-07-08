import PropTypes from 'prop-types'

import { List, Item } from './ContactList.styled'
import Button from '../Button/Button'

export default function ContactList({ contacts, onClick }) {
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
