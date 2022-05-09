import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form className=".ml-1" id="contact-form" onSubmit={handleSubmit}>
        <div className='col-sm-2 col-form-label'>
          <label htmlFor="name">Name:</label>
          <input className='m-1' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='col-sm-2 col-form-label'>
          <label htmlFor="email">Email address:</label>
          <input className='m-1'  type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='m-2'>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
