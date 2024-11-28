import { AuthProvider } from './context/AuthContext'
import { SignIn } from './components/Auth/SignIn'
import { SignUp } from './components/Auth/SignUp'
import { useAuth } from './context/AuthContext'
import { useState } from 'react'

function AuthenticatedApp() {
  const { user, signOut } = useAuth()
  
  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

function UnauthenticatedApp() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-toggle-container">
          <button
            onClick={() => setIsSignIn(true)}
            className={`auth-toggle-button ${isSignIn ? 'active' : ''}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`auth-toggle-button ${!isSignIn ? 'active' : ''}`}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  )
}

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

function AppWithProvider() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default AppWithProvider
