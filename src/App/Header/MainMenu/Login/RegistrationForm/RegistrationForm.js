import React from 'react'
import './RegistrationForm.css'

export default () => (
    <form action='' className='registry'>
        <p>Username:<span>*</span></p>
        <input type="text"/>
        <p>Email:<span>*</span></p>
        <input type="email"/>
        <p>Password:<span>*</span></p>
        <input type="password"/>
        <br/>
        <button type='submit'>Sign up for The News Reporter</button>
    </form>
)