// import { useCreatePet } from "../services/mutations";
import { usePets } from "../services/queries";
import Pet from "../types/Pet";

const userID = 'c2ce6876-9838-4e97-b768-32874f6455d1'


export const Pets = () => {
    const petIdsQuery = usePets(userID);
    return (
      <div>
        <h3>Data fetched</h3>
  
        {petIdsQuery.isError && <p>{petIdsQuery.error.message}</p>}
  
        {petIdsQuery.isLoading ? (
          <p>Getting Pets...</p>
        ) : (
          (petIdsQuery.data ?? []).map((pet: Pet) => (
            <div key={pet.pet_id}>
              <h3>{pet.pet_name}</h3>
            </div>
          ))
        )}
      </div>
    );
  };