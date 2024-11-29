import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './Auth.scss'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      await signIn(email, password)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h2 className="auth-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <label htmlFor="email" className="input-label">Email</label>
          <input
            id="email"
            type="email"
            className="auth-input"
            placeholder="CodeBrews@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <label htmlFor="password" className="input-label">Password</label>
          <input
            id="password"
            type="password"
            className="auth-input"
            placeholder="Add your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button
          type="submit"
          className="auth-button animate-fade-in-up"
          disabled={loading}
          style={{ animationDelay: '600ms' }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </>
  )
} 