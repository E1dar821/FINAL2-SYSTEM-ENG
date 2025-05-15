import { useDispatch, useSelector } from 'react-redux'
import { logout, selectEmail } from '../store/slices/loginFormSlice'

const LoggedInView = () => {
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Добро пожаловать!</h2>
        <p className="text-lg text-gray-600 mb-6">Вы вошли как <span className="font-medium text-blue-600">{email}</span></p>
        
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Выйти
        </button>
      </div>
    </div>
  )
}

export default LoggedInView 