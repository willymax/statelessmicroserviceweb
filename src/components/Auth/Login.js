import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Login.css'

export default function Login({ setToken }) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = {
      username,
      password,
    }
    const response = await login(form)
    setToken(response.token)
  }

  return (
    <div className='bg-black'>
      <div class='flex items-center min-h-screen bg-white dark:bg-gray-900'>
        <div class='container mx-auto'>
          <div class='max-w-md mx-auto my-10'>
            <div class='text-center'>
              <h1 class='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
                Sign in
              </h1>
              <p class='text-gray-500 dark:text-gray-400'>
                Sign in to access your account(Enter arbitrary values)
              </p>
            </div>
            <div class='m-7'>
              <form onSubmit={handleSubmit}>
                <div class='mb-6'>
                  <label
                    for='username'
                    class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    Username
                  </label>
                  <input
                    type='username'
                    name='username'
                    id='username'
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='username'
                    class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                  />
                </div>
                <div class='mb-6'>
                  <div class='flex justify-between mb-2'>
                    <label
                      for='password'
                      class='text-sm text-gray-600 dark:text-gray-400'
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Your Password'
                    class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                  />
                </div>
                <div class='mb-6'>
                  <button
                    type='submit'
                    class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function login(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}
