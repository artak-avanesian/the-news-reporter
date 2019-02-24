import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default () => (
    <form action='' className='login'>
        <p>Username:</p>
        <input type="email" placeholder='E-mail'/>
        <p>Password:</p>
        <input type="password" placeholder='Password'/>
        <br/>
        <button type='submit'>Sign in</button>
        <br/>
        <Link to='/registration'>Create an account</Link>
    </form>
)