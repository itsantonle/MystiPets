export type Pet = {
  pet_id: number
  pet_name: string
  pet_type: "Hydra" | "Capybara"
  hunger_status: number
  happiness_status: number
  is_dead: boolean
  has_left: boolean
  health: number
  food_id?: 1
  mood_id?: number
  player_uuid?: string
}
