import { useCreatePet } from "../services/mutations";
import { usePets } from "../services/queries";

const userID = 'c2ce6876-9838-4e97-b768-32874f6455d1'


// export default function Pets() {
//     const petIdsQuery = usePets(userID)
//     const createPet = useCreatePet()
//     const handleCreatePet = (data) => {
//         createPet.mutate(data)
//     }

//     if (petIdsQuery.isPending) {
//         return <span>getting pets...</span>
//     }

//     if (petIdsQuery.isError) {
//         return <span>Error getting pet!</span>
//     }

//     return (
//         <ul>
//         {petIdsQuery.data.map((id) => (
//             <li key={id}>{id}</li>
//         ))}
//         </ul>
//     )
// }