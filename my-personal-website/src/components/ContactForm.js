import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <div className='form-container'>
        <form className='form'>
            <label for='story'> 
            <input type="text" name="name" placeholder='Nom'/>
            </label>
            <label>
            <input type="mail" name="mail" placeholder='Email' />
            </label>
            <label>
            <textarea name='description' placeholder='Écrivez votre message'></textarea>
            </label>
            <input type="submit" value="SEND" />
        </form>
    </div>
  )
}
