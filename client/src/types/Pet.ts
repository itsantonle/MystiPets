type Pet = {
  pet_name: string
  pet_type: "Hydra" | "Capybara"
  hunger_status: number
  happiness_state: number
  is_dead: boolean
  has_left: boolean
  health: number
  player_id?: number
  food_id?: 1
  position_x?: number
  position_y?: number
  mood_id?: number
}

export default Pet
