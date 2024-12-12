import "bootstrap/dist/css/bootstrap.min.css"
import { AnimatedHealthBar } from "./healthbar"
import { HappinessDisplay } from "./HappinessDisplay"
import { HungerDisplay } from "./HungerDisplay"
import feedButton from "../components/img/icons/feedButton.png"
import playButton from "../components/img/icons/playButton.png"
import healthBarFrame from "./img/icons/health-bar-frame-1.png"
// import * as React from "react"
// import { manageHealth } from "../utils/interfaceUtil/healthBarUtil"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import {
  useUpdateHappiness,
  useUpdateHealth,
  useUpdateHunger,
} from "../services/mutations/petmutations"
import { useEffect, useState } from "react"
import { isEating } from "../utils/interfaceUtil/hungerBarUtil"
import { isPlaying } from "../utils/interfaceUtil/happinessBarUtil"

const Panel = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  // to do peridical mutation use the useEffect hook with setInterval()
  const updateHappinessMutation = useUpdateHappiness()
  const updateHungerMutation = useUpdateHunger()
  const updateHealthMutation = useUpdateHealth()

  const validatePenalty = (penaltyType: string) => {
    //check the health value

    switch (penaltyType) {
      case "dead":
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // updateHappinessMutation.mutate()
      // updateHungerMutation.mutate()
      // 3000 ms = 3 seconds change accordingly
      // willDie(pet.health!, false)
      // willRunAway(pet.happiness_status!, pet.health!, false)
      // don't hard code the boolean check in the DB
    }, 3000)

    //umnmount interval per run
    return () => clearInterval(interval)
  }, [])
  // the dependency array must take all the mutation functions involved
  //updateHappinessMutation.mutate() and updateHungerMutation.mutate() are candidates
  // call isNotEating isNotPlaying util function to decrease on a constant rate per interval

  // renamed this unclear
  // add a condition checke function

  const eatingButtonClicked = () => {
    // run updateHungerval muation here with isEating util instead of notEating
    if (pet.hunger_status! <= 95) {
      const hungerParam = {
        player_uuid: user!.id,
        hunger_status: isEating(pet.hunger_status!),
      }
      updateHungerMutation.mutate(hungerParam)
    }
  }

  const playingButtonClicked = () => {
    if (pet.happiness_status! <= 95) {
      const happyParam = {
        player_uuid: user!.id,
        happiness_status: isPlaying(pet.happiness_status!),
      }
      updateHappinessMutation.mutate(happyParam)
    }
  }

  return (
    <div className="panel-container position-absolute top-80 start-50 translate-middle">
      <div className="counter-container">
        <HappinessDisplay/>
        <HungerDisplay/>
      </div>

      <div className="name-bar-button-container">
        <div className="name-buttons-container">
          <textarea
            className="name-text-style"
            placeholder="pet"
            value={pet.pet_name}
            readOnly
          ></textarea>

          <button
            className="button-style"
            type="button"
            onClick={eatingButtonClicked}
            disabled={updateHungerMutation.isPending ? true : false}
          >
            <img src={feedButton} className="img-fluid" />
          </button>
          <button
            className="button-style"
            type="button"
            onClick={playingButtonClicked}
            disabled={
              updateHappinessMutation.isPending ? true : false
            }
          >
            <img src={playButton} className="img-fluid" />
          </button>
        </div>
        <div className="health-bar-style">
          <textarea
            className="HP-text-style"
            placeholder="HP:"
            value={""}
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
          value={"hungry"}
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default Panel
