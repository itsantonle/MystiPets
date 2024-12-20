import LOGO from "/Mystipets.png" 
import "../bootstrap/bootstrapSass.scss"

export const Logo = () => {
  return <img src={LOGO} className="gamelogo" />
}

export default Logo