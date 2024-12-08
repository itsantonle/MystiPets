import {
    QueryClient,
    useMutation,
    useQueryClient,
  } from "@tanstack/react-query"
  import Pet from "../../types/Pet"
  import { 
    createPet, 
    deletePet, 
    updatePetDeath, 
    updatePetHappiness, 
    updatePetHealth, 
    updatePetHunger, 
    updatePetLeaving, 
    updatePetName } 
    from "../api/petapi"
  
  
export const useCreatePet = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Pet) => createPet(data),

        onMutate: () => {console.log("mutate")},
        onError: () => {console.log("error")},
        onSuccess: () => {console.log("success")},

        onSettled: async (_, error, { player_uuid }) => {
        (console.log("settled"))
        error 
        ? console.log(error) 
        : await queryClient
        .invalidateQueries({ 
            queryKey: ["pets", { player_uuid }]
        })
        }
    })
}

export const useUpdateHealth = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ player_uuid, health}: { player_uuid: string; health: number}) => 
            updatePetHealth(player_uuid, health),

        onSettled: async (_, error, { player_uuid }) => {
            error 
            ? console.log(error) 
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
}

export const useUpdatePetName = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            player_uuid, 
            pet_name
            }: 
            {player_uuid: string;
            pet_name: string}) => 
            updatePetName(player_uuid, pet_name),

        onSettled: async (_, error, { player_uuid }) => {
            error 
            ? console.error('Error updating pet name:', error) 
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid}]
            })
        }
    })
}

export const useUpdateHunger = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            player_uuid, 
            hunger_status
            }: 
            {player_uuid: string; 
            hunger_status: number}) => 
            updatePetHunger(player_uuid, hunger_status),
        
        onSettled: async (_, error, { player_uuid }) => {
            error
            ? console.error('Error updating hunger:', error)
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
}

export const useUpdateHappiness = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            player_uuid,
            happiness_status
            }:
            {player_uuid: string;
            happiness_status: number}) => 
            updatePetHappiness(player_uuid, happiness_status),

        onSettled: async (_, error, { player_uuid }) => {
            error
            ? console.error('Error updating happiness:', error)
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
}

export const useUpdateDeath = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({
            player_uuid,
            is_dead
            }:
            {player_uuid: string;
            is_dead: boolean}) => 
            updatePetDeath(player_uuid, is_dead),
    
        onSettled: async (_, error, { player_uuid }) => {
            error
            ? console.error('Error updating pet death:', error)
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
}

export const useUpdateMood = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({
            player_uuid,
            has_left
            }:
            {player_uuid: string;
            has_left: boolean}) => 
            updatePetLeaving(player_uuid, has_left),
    
        onSettled: async (_, error, { player_uuid }) => {
            error
            ? console.error('Error updating pet death:', error)
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
}

export const useDeletePet = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (player_uuid: string) => deletePet(player_uuid),

        onSuccess: () => (console.log("Successfully deleted pet.")),

        onSettled: async (_, error, player_uuid) => {
            error
            ? console.error('Error deleting pet:', error)
            : await queryClient
            .invalidateQueries({
                queryKey: ["pets", { player_uuid }]
            })
        }
    })
    
}
