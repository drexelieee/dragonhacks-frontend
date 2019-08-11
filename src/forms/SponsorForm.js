import React from 'react'
import app from '../firebaseApp'
import "./SponsorForm.module.css"

export default class SponsorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      organization: '',
      contactName: '',
      contactEmail: '',
      package: '',
      donation: 0,
      message: ''
    }
    this.handlerFor = this.handlerFor.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handlerFor(valueName) {
    const handler = (event) => {
      this.setState({
        [valueName]: event.target.value
      })
    }
    return handler
  }

  onFormSubmit(event) {
    const submitSponsorForm = app.functions().httpsCallable('submitSponsorForm')
    submitSponsorForm(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Organization Name
          <input type='text' value={this.state.organization} onChange={this.handlerFor('organization')} required />
        </label>
        <label>
          Name
          <input type='text' value={this.state.contactName} onChange={this.handlerFor('contactName')} required />
        </label>
        <label>
          Email
          <input type='email' value={this.state.contactEmail} onChange={this.handlerFor('contactEmail')} required />
        </label>
        <select value={this.state.package} onChange={this.handlerFor('package')}>
          <option value=''>Uncertain</option>
          <option value='bronze'>Bronze</option>
          <option value='silver'>Silver</option>
          <option value='gold'>Gold</option>
          <option value='platinum'>Platinum</option>
        </select>
        <label>Optional Donation
          <input type='number' value={this.state.donation} onChange={this.handlerFor('donation')} />
        </label>
        <textarea value={this.state.message} onChange={this.handlerFor('message')} />
        <input type='submit' />
      </form>
    )
  }
}
