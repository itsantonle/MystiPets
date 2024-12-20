import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"



export const NameField = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  return (
    <div className="interactive-panel__name-field">
      <textarea
        className="interactive-panel__name-input"
        placeholder="pet"
        value={pet.pet_name}
        readOnly
      />
    </div>
  )
}

export default NameField
