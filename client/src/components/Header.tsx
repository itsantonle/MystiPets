import "./pet-selection/Pet-selection.scss"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const { signOut } = useAuth()

  return (
      <button
        onClick={signOut}
        type="button"
        className="logoutButton top-3 end-3"
      >
        LEAVE
      </button>
  )
}

export default Header
