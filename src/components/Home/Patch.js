import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Patch.css'

export default function Patch({ token }) {
  const [original, setOriginal] = useState()
  const [patch, setPatch] = useState()
  const [results, setResults] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = {
      original: original.trim(),
      patch: patch.trim(),
    }
    try {
      const response = await submitPatch(form, token)
      setResults(JSON.stringify(response))
      alert(`Results: ${results}`)
    } catch (error) {
      alert(`An error occurred: ${error}`)
    }
  }

  return (
    <div className='bg-black'>
      <div class='flex items-center min-h-screen bg-white dark:bg-gray-900'>
        <div class='container mx-auto'>
          <div class='max-w-2xl mx-auto my-10'>
            <div class='text-center'>
              <h1 class='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
                Apply Patch
              </h1>
              <p class='text-gray-500 dark:text-gray-400'>
                Sign in to access your account(Enter arbitrary values)
              </p>
            </div>
            <div class='m-7'>
              <form class='p-2' onSubmit={handleSubmit}>
                <label class='block text-left'>
                  <span class='text-gray-700'>Original</span>
                  <textarea
                    class='form-textarea mt-1 block w-full p-2 border-2'
                    rows='5'
                    onChange={(e) => setOriginal(e.target.value)}
                    placeholder='Enter original JSON'
                  ></textarea>
                </label>
                <label class='block text-left'>
                  <span class='text-gray-700'>Patch</span>
                  <textarea
                    class='form-textarea mt-1 block w-full p-2 border-2'
                    rows='5'
                    onChange={(e) => setPatch(e.target.value)}
                    placeholder='Enter the patch JSON'
                  ></textarea>
                </label>
                <label class='block text-left'>
                  <span class='text-gray-700'>Results</span>
                  <textarea
                    class='form-textarea mt-1 block w-full p-2 border-2'
                    rows='5'
                    value={results}
                    placeholder='Results after patch'
                    disabled
                  ></textarea>
                </label>
                <div class='mb-6'>
                  <button
                    type='submit'
                    class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
                  >
                    Submit
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

async function submitPatch(data, token) {
  return fetch('http://localhost:3000/json-patch', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}
