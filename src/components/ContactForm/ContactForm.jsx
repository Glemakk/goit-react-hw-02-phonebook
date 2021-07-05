import React, { Component } from 'react'
import Button from '../Button/Button'
// import { List } from './ContactForm.styled'
import { Form } from './ContactForm.styled'

export default class ContactForm extends Component {
  //   state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     name: '',
  //     number: '',
  //   }

  //   handleChange = ({ target }) => {
  //     const value = target.value
  //     const name = target.name
  //     console.log('value=>', value)
  //     this.setState({
  //       [name]: value,
  //     })
  //   }

  //   handleSubmit = (e) => {
  //     const { number, name } = this.state
  //     e.preventDefault()
  //     this.setState({
  //       contacts: [...contacts, {name, number}],
  //       name: '',
  //       number: '',
  //     }))
  //   }

  render() {
    const { onSubmit, onChange, onClick, contacts, name, number } = this.props
    return (
      <div>
        <Form onSubmit={onSubmit}>
          <label>
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label>
            <h2>Number</h2>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={onChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <Button text="Add contact" />
        </Form>
      </div>
    )
  }
}

// class ContactForm extend Component({ onClick }) {
//   return (
//     <div>
//       <h2>Name</h2>
//       <Form>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//         <Button text="Add contact" type="button" onClick={onClick} />
//       </Form>
//     </div>
//   )
// }

// export default ContactForm
