import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/InteractivePanel.scss"

import { AnimatedHealthBar } from "./healthbar"
import { HappinessDisplay } from "./HappinessDisplay"
import { HungerDisplay } from "./HungerDisplay"
import feedButton from "../components/img/icons/feedButton.png"
import playButton from "../components/img/icons/playButton.png"
import healthBarFrame from "./img/icons/health-bar-frame-1.png"
import logPanel from "/assets/log.png"
// import * as React from "react"
// import { manageHealth } from "../utils/interfaceUtil/healthBarUtil"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import {
  useUpdateHappiness,
  useUpdateHealth,
  useUpdateHunger,
  useUpdatePetMood,
} from "../services/mutations/petmutations"
import { useEffect, useState } from "react"
import { isEating } from "../utils/interfaceUtil/hungerBarUtil"
import { isPlaying } from "../utils/interfaceUtil/happinessBarUtil"
import { MoodDisplay } from "./MoodDisplay"
import { useQueryClient } from "@tanstack/react-query"

const Panel = () => {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  // to do peridical mutation use the useEffect hook with setInterval()
  const updateHappinessMutation = useUpdateHappiness()
  const updateHungerMutation = useUpdateHunger()
  const updateHealthMutation = useUpdateHealth()
  const updateMoodMutation = useUpdatePetMood()

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
    // this can be crammed into Eating Button tsx

    console.log("eating button clicked")
    if (pet.hunger_status! <= 95) {
      const hungerParam = {
        player_uuid: user!.id,
        hunger_status: isEating(pet.hunger_status!),
      }
      updateHungerMutation.mutate(hungerParam)
    }
  }

  const playingButtonClicked = () => {
    console.log("playing button clicked")
    if (pet.happiness_status! <= 95) {
      const happyParam = {
        player_uuid: user!.id,
        happiness_status: isPlaying(pet.happiness_status!),
      }
      updateHappinessMutation.mutate(happyParam)
      // update the mood
      // refactor this code better
      // this can be made crammed in playingButton tsx
      if (!updateMoodMutation.isPending) {
        if (
          pet.happiness_status! > 20 &&
          pet.happiness_status! < 50
        ) {
          updateMoodMutation.mutate({
            player_uuid: user!.id!,
            mood_id: 2,
          })
        }
        if (
          pet.happiness_status! > 0 &&
          pet.happiness_status! <= 20
        ) {
          updateMoodMutation.mutate({
            player_uuid: user!.id!,
            mood_id: 1,
          })
        }
        if (pet.happiness_status! >= 50) {
          updateMoodMutation.mutate({
            player_uuid: user!.id!,
            mood_id: 3,
          })
        }
      }
    }
  }

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
          {/* Name field */}
          <div className="interactive-panel__name-field">
            <textarea
              className="interactive-panel__name-input"
              placeholder="pet"
              value={pet.pet_name}
              readOnly
            />
          </div>

          {/* Health bar */}
          <div className="interactive-panel__health">
            <span className="interactive-panel__health-label">
              HP:
            </span>
            <div className="interactive-panel__health-bar-container">
              <img
                src={healthBarFrame}
                className="interactive-panel__health-frame"
              />
              <div className="interactive-panel__health-bar">
                <AnimatedHealthBar />
              </div>
            </div>
          </div>
        </div>

        {/* Right section - buttons */}
        <div className="interactive-panel__buttons">
          <button
            type="button"
            onClick={eatingButtonClicked}
            disabled={updateHungerMutation.isPending}
            className="interactive-panel__action-button"
          >
            <img src={feedButton} className="img-fluid w-100"/>
          </button>
          <button
            type="button"
            onClick={playingButtonClicked}
            disabled={updateHappinessMutation.isPending}
            className="interactive-panel__action-button"
          >
            <img src={playButton} className="img-fluid  w-100" />
          </button>
          <div className="interactive-panel__mood-display">
            <MoodDisplay />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
