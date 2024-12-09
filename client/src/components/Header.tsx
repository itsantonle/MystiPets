import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const { signOut } = useAuth()

  return (
    <button
      onClick={signOut}
      type="button"
      className="btn btn-danger position-absolute top-3 end-3"
    >
      LOG OUT
    </button>
  )
}

export default Header
