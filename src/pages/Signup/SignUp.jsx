import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';

function SignUp() {

  const  [name, setName] = React.useState('');
  const  [email, setEmail] = React.useState('');
  const  [password, setPassword] = React.useState('');
  const  [error,setError] =  React.useState(null)



  const handlesignUp  = async (e) => {
    e.preventDefault();

    if(!name){
      setError("Please  enter your Name")
      return;
    }
    if(!validateEmail(email)){
      setError("Please  enter your Email")
      return;
    }
    if(!password){
      setError("Please  enter your Password")
      return;
    }
    setError(null)
  }


  return (
    <>
      <Navbar />

      <div className='flex justify-center items-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handlesignUp}>
            <h4 className='text-2xl mb-7'>Sign Up</h4>
            <input
              type='text'
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
              />
              {error &&  <p className='text-red-500'>{error}</p>}

            </>

            <button type='submit' className='btn-primary'>
              Sign Up
            </button>
            <p className='text-sm text-center mt-4'>
              Already Registered{' '}
              <Link className='font-medium text-primary underline' to='/login'>
                Login to Account
              </Link>
              </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
