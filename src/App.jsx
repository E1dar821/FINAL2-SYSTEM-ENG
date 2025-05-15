import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from './store/slices/loginFormSlice'
import LoginForm from './components/LoginForm'
import LoggedInView from './components/LoggedInView'

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLoggedIn ? <LoggedInView /> : <LoginForm />}
      </div>
    </div>
  )
}

export default App 