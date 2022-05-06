import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'



export default function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='form-container'>
        <form ref={form} onSubmit={sendEmail} className='form'>
            <input type="text" name="user_name" placeholder='Nom'/>
            <input type="mail" name="user_email" placeholder='Email' />
            <textarea name='message' placeholder='Écrivez votre message'></textarea>
            <input type="submit" value="SEND" />
        </form>
    </div>
  )
}
