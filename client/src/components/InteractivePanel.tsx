//utils
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/InteractivePanel.scss"
import logPanel from "/assets/log.png"

//components
import { MoodDisplay } from "./MoodDisplay"
import { HappinessDisplay } from "./HappinessDisplay" //refactored
import { HungerDisplay } from "./HungerDisplay" // refactored
import { PlayingBtn } from "./PlayingButton" //refactored
import EatingButton from "./EatingButton"//refactored
import NameField from "./NameField"//refactored
import HealthBarDisplay from "./HealthBarDisplay"//refactored

const Panel = () => {

  return (
    <div className="bottom-5 interactive-panel__container">
      <img
        src={logPanel}
        alt="panel"
        className="interactive-panel__panel-image"
      />
      <div className="interactive-panel__content">
        {/* Left side stats */}
        <div className="interactive-panel__stats">
          <div className=" interactive-panel__stats-item">
            <HappinessDisplay />
          </div>
          <div className="interactive-panel__stats-item">
            <HungerDisplay />
          </div>
        </div>

        {/* Center section */}
        <div className="interactive-panel__center">
          <NameField />
          <HealthBarDisplay />
        </div>

        {/* Right section - buttons */}
        <div className="interactive-panel__buttons">
          <EatingButton/>
          <PlayingBtn />
          <div className="interactive-panel__mood-display">
            <MoodDisplay />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
