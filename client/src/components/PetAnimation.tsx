import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"

import { useState } from "react"
import {
  Hydra_Idle,
  Hydra_Happy,
  //   Hydra_Sad,
  Hydra_Angry,
  //   Hydra_Dead,
  //   Hydra_Eating,
  Capycorn_Idle,
  Capycorn_Happy,
  //   Capycorn_Sad,
  Capycorn_Angry,
  //   Capycorn_Dead,
  //   Capycorn_Eating,
} from "./img/Animations"

export const CapycornAnim = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0] //index 0 cuz u only have 1 pet
  const [capyEmotes, setCapyEmotes] = useState<any[]>([])

  if (pet.pet_type == "Capycorn") {
    if (pet.health! >= 50) {
      setCapyEmotes(Capycorn_Happy)
    } else if (pet.health! <= 30) {
      setCapyEmotes(Capycorn_Idle)
    } else {
      setCapyEmotes(Capycorn_Angry)
    }
  }
  return { capyEmotes }
}

export const HydraAnim = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0] //index 0 cuz u only have 1 pet
  const [hydraEmotes, setHydraEmotes] = useState<any[]>([])

  if (pet.pet_type == "Hydra") {
    if (pet.health! >= 50) {
      setHydraEmotes(Hydra_Happy)
    } else if (pet.health! <= 30) {
      setHydraEmotes(Hydra_Idle)
    } else {
      setHydraEmotes(Hydra_Angry)
    }
  }
  return { hydraEmotes }
}
