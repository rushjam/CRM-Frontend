import React, { useState } from 'react'
import { ForgotPassword } from '../../components/login/ForgotPassword'

import { Login } from '../../components/login/Login'

import './entry.style.css'

export const Entry = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formLoad, setFormLoad] = useState("login")

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        break
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return alert("not accetpet")
    }

    console.log(email, password);
  }
  const handleOnResetSubmit = e => {
    e.preventDefault();

    if (!email) {
      return alert("not accetpet")
    }

    console.log(email);
  }
  const formSwitcher = formType => {
    setFormLoad(formType)
  }
  return (
    <div className='entry-page bg-info'>
      <div className='jumbotron'>
        {
          formLoad === 'login' &&
          <Login
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password} />
        }

        {
          formLoad === 'reset' &&
          <ForgotPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email} />
        }
      </div>
    </div>
  )
}
