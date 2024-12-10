import "bootstrap/dist/css/bootstrap.min.css"
import { manageHappiness } from "../utils/interfaceUtil/happinessBarUtil"
import happyStar from "../components/img/icons/happy_star.png"
import meat from "../components/img/icons/meat.png"
import feedButton from "../components/img/icons/feedButton.png"
import playButton from "../components/img/icons/playButton.png"
import { getValues } from "./DB_PanelLink"
import { manageHunger } from "../utils/interfaceUtil/hungerBarUtil"
import healthBarFrame from "./img/icons/health-bar-frame-1.png"
import { AnimatedHealthBar } from "./healthbar"
// import * as React from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { updatePetHunger } from "../services/api/petapi"


const Panel = () => {
  const updateHungerHook = updatePetHunger()
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]

  const { trackIncrease } = manageHealth() //<=========Add argument here?

  const eatingUtils = () => {
    trackIncrease()
  }

  const playingutils = () => {
    trackIncrease()
  }

  return (
    <div className="panel-container position-absolute top-80 start-50 translate-middle">
      <div className="counter-container">
        <div className="counter-style">
          {" "}
          <img src={happyStar} className="img-fluid" />:{" "}
          {}{" "} {/* <================================= PLACE HAPPY FETCH VALUE HERE*/}
        </div>
        <div className="counter-style">
          {" "}
          <img src={meat} className="img-fluid" />: {}{" "}  {/* <============================= PLACE HUNGER FETCH VALUE HERE*/}
        </div>
  
      </div>

      <div className="name-bar-button-container">
        <div className="name-buttons-container">
          <textarea
            className="name-text-style"
            placeholder="pet"
            readOnly
          >
            {pet.pet_name}
          </textarea>

          <button
            className="button-style"
            type="button"
            onClick={eatingUtils}
          >
            <img src={feedButton} className="img-fluid" />
          </button>
          <button
            className="button-style"
            type="button"
            onClick={playingutils}
          >
            <img src={playButton} className="img-fluid" />
          </button>
          <button
            className="button-style"
            type="button"
            onClick={playingutils}
          >
            <img src={playButton} className="img-fluid" />
          </button>
        </div>
        <div className="health-bar-style">
          {isHealthyValue}
          <textarea
            className="HP-text-style"
            placeholder="HP:"
            readOnly
          ></textarea>
          <div>
            <img src={healthBarFrame} className="health-bar-frame" />
            <AnimatedHealthBar />
          </div>
        </div>
      </div>

      <div className="mood-container">
        <textarea
          className="mood-style"
          placeholder="Mood"
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default Panel
