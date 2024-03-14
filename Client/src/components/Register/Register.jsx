import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import "./Register.css"
const Register = () => {
    const [userObject, setUserObject] = useState({})

    const handleChange = (e) => {
        setUserObject({...userObject, [e.target.name]:e.target.value})
    }

    useEffect(()=>{console.log(userObject)},[userObject])
  return (
    <div className={'registerContainer'}>
        <Input onChange={handleChange} placeholder={'username'} isRequired name={"username"} />
        <Input onChange={handleChange} placeholder={'password'} isRequired name={"password"} type={"password"} />
        <Input onChange={handleChange} placeholder={'validatePassword'} isRequired name={"validatePassword"} type={"password"}/>
        <Input onChange={handleChange} placeholder={'email'} isRequired name={"email"}  type={"email"}/>
        <Input onChange={handleChange} placeholder={'age'} name={"age"} type={'number'}/>
        <Input onChange={handleChange} placeholder={'job'} name={"job"} />
        <button>SUBMIT</button>
    </div>
  )
}

export default Register