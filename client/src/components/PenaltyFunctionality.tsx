import "bootstrap/dist/css/bootstrap.min.css"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useAssignPenalty} from "../services/mutations/penaltymutations"
import { useEffect } from "react"
import { useDeletePet } from "../services/mutations/petmutations"
import { useUpdateDeath, useUpdateLeaving } from "../services/mutations/petmutations"


const { user } = useAuth();
const pet = usePets(user!.id).data![0]
const petHunger = pet.hunger_status
const petHappiness = pet.happiness_status
const applyPenalty = useAssignPenalty()
const deletePet = useDeletePet()
const updateLeaveStatus = useUpdateLeaving()
const updateDeathStatus = useUpdateDeath()


const applyDeathPenalty = () => {
    return applyPenalty.mutateAsync({
        player_uuid: user!.id,
        player_penalty: 1
    })
    .then(() => {
        deletePet.mutateAsync(user!.id)
    })
    .then(() => {
        updateDeathStatus.mutateAsync({
            player_uuid: user!.id,
            is_dead: true
        })
    })
}

const applyLeavingPenalty = () => {
    return applyPenalty.mutateAsync({
        player_uuid: user!.id,
        player_penalty: 2
    })
    .then(() => {
        updateLeaveStatus.mutateAsync({
            player_uuid: user!.id,
            has_left: true
        })
    })
}


// uses the application of penalties in useeffect for automatic usage ig
export const DisplayDeath = () => {
    useEffect(() => {
        if (petHunger === 0 ) applyDeathPenalty()
    }, [petHunger])

    return <div>Bye</div> //insert death animation and pet absence on screen
}

export const DisplayLeaving = () => {
    useEffect(() => {
        if (petHappiness === 0) applyLeavingPenalty()
    }, [petHappiness])

    return <div>Hello</div> //insert pet absence on screen... idk pa how to implement non interactive task panel once pet is absent
}
