import React, { Component } from 'react'
import Button from '../Button/Button'
// import { List } from './ContactForm.styled'
import { FcPhoneAndroid, FcBusinessContact } from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { Form, InputDiv, Input } from './ContactForm.styled'

export default class ContactForm extends Component {
  handleChange = ({ target }) => {
    const value = target.value
    const name = target.name
    // console.log('value=>', value)
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { onSubmit, onChange, name, number } = this.props
    return (
      <div>
        <Form onSubmit={onSubmit}>
          <label>
            <h2>Name</h2>
            <InputDiv>
              <IconContext.Provider value={{ size: '23px' }}>
                <FcBusinessContact />
              </IconContext.Provider>
              &nbsp;
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                autoComplete="off"
              />
            </InputDiv>
          </label>

          <label>
            <h2>Number</h2>
            <InputDiv>
              <IconContext.Provider value={{ size: '23px' }}>
                <FcPhoneAndroid />
              </IconContext.Provider>
              &nbsp;
              <Input
                type="tel"
                name="number"
                value={number}
                onChange={onChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                autoComplete="off"
              />
            </InputDiv>
          </label>
          <Button text="Add contact" />
        </Form>
      </div>
    )
  }
}
