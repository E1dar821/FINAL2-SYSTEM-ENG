import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/loginFormSlice'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    
    if (value && !validateEmail(value)) {
      setError('Пожалуйста, введите корректный email')
    } else {
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateEmail(email)) {
      dispatch(login(email))
    } else {
      setError('Пожалуйста, введите корректный email')
    }
  }

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Вход в систему</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="your@email.com"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        
        <button
          type="submit"
          disabled={!email || !!error}
          className={`w-full py-2 px-4 rounded-md font-medium text-white ${
            !email || !!error
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
          }`}
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default LoginForm 