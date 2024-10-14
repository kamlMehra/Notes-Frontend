
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!validateEmail(email)){
      setError("Please enter a valid Email address !")
      return;
    }
    if(!password){
      setError("Please enter the password")
      return;
    }
    setError(null)
  };

  return (
    <>
      <Navbar />

      <div className='flex justify-center items-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleSubmit}>
            <h4 className='text-2xl mb-7'>Login</h4>
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
              Login
            </button>
            <p className='text-sm text-center mt-4'>
              Not registered yet?{' '}
              <Link className='font-medium text-primary underline' to='/signup'>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
