// import "bootstrap/dist/css/bootstrap.min.css"
// import { usePets } from "../services/queries/petQueries"
// import { useAuth } from "../context/AuthContext"
// import { useAssignPenalty} from "../services/mutations/penaltymutations"
// import { useEffect } from "react"
// import { useDeletePet } from "../services/mutations/petmutations"
// import { useUpdateDeath, useUpdateLeaving } from "../services/mutations/petmutations"


// const { user } = useAuth();
// const pet = usePets(user!.id).data![0]
// const petHunger = pet.hunger_status
// const petHappiness = pet.happiness_status
// const applyPenalty = useAssignPenalty()
// const deletePet = useDeletePet()
// const updateLeaveStatus = useUpdateLeaving()
// const updateDeathStatus = useUpdateDeath()


// export const applyDeathPenalty =  async () => {
//     await applyPenalty.mutateAsync({
//         player_uuid: user!.id,
//         player_penalty: 1
//     })
//     await deletePet.mutateAsync(user!.id)
//     return updateDeathStatus.mutateAsync({
//             player_uuid: user!.id,
//             is_dead: true
//         })
    
// }

// export const applyLeavingPenalty = async () => {
//     await applyPenalty.mutateAsync({
//         player_uuid: user!.id,
//         player_penalty: 2
//     })
//     return updateLeaveStatus.mutateAsync({
//             player_uuid: user!.id,
//             has_left: true
//         })

// }

// // uses the application of penalties in useeffect for automatic usage ig
// export const DisplayDeath = () => {
//     useEffect(() => {
//         if (petHunger === 0 ) applyDeathPenalty()
//     }, [petHunger])

//     window.alert("YOUR PET HAS DIED. YOU'RE A BAD OWNER")
//     return <div>Hello</div>
// }

// export const DisplayLeaving = () => {
//     useEffect(() => {
//         if (petHappiness === 0) applyLeavingPenalty()
//     }, [petHappiness])

//     window.alert("YOUR PET HAS LEFT YOU. WAIT FOR IT TO COME BACK")
//     return <div>Bye</div>
// }