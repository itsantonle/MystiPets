'use client'

import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './Pet-selection.scss'

interface Pet {
  name: string
  image: string
  type: 'HYDRA' | 'CAPYCORN'
}

export default function PetSelection() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [petName, setPetName] = useState('')
  const { signOut } = useAuth()

  const handleStartAdventure = () => {
    if (selectedPet && petName) {
      // Handle adventure start logic
      // console.log('Starting adventure with:', { pet: selectedPet, name: petName })
    }
  }

  return (
    <div className="gameContainer">
      <button className="logoutButton" onClick={signOut}>
        LOG OUT
      </button>

      <h1 className="gameTitle">Petiverse</h1>
      <h2 className="chooseTitle">CHOOSE A PET</h2>

      <div className="petSelection">
        <div 
          className={`petCard ${selectedPet?.type === 'HYDRA' ? 'selected' : ''}`}
          onClick={() => setSelectedPet({ type: 'HYDRA', name: 'HYDRA', image: '/hydra.png' })}
        >
          <img src="/hydra.png" alt="Hydra" className="petImage" />
          <p className="petName">HYDRA</p>
        </div>

        <div 
          className={`petCard ${selectedPet?.type === 'CAPYCORN' ? 'selected' : ''}`}
          onClick={() => setSelectedPet({ type: 'CAPYCORN', name: 'CAPYCORN', image: '/capycorn.png' })}
        >
          <img src="/capycorn.png" alt="Capycorn" className="petImage" />
          <p className="petName">CAPYCORN</p>
        </div>
      </div>

      <div className="nameInputContainer">
        <input
          type="text"
          placeholder="Name your pet"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="pixelInput"
          maxLength={20}
        />
        
        <button
          className="startButton"
          onClick={handleStartAdventure}
          disabled={!selectedPet || !petName}
        >
          START ADVENTURE
        </button>
      </div>
    </div>
  )
} 