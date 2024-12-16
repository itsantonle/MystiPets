import hydraI1 from "./hydraIdle/hydra-idle1.png"
import hydraI2 from "./hydraIdle/hydra-idle2.png"
import hydraH1 from "./petSprites/hydra-happy1.png"
import hydraH2 from "./petSprites/hydra-happy2.png"
import hydraS1 from "./petSprites/hydra-sad1.png"
import hydraS2 from "./petSprites/hydra-sad2.png"
import hydraA1 from "./petSprites/hydra-angry1.png"
import hydraA2 from "./petSprites/hydra-angry2.png"
import hydraD1 from "./petSprites/hydra-dead1.png"
import hydraD2 from "./petSprites/hydra-dead2.png"
import hydraE1 from "./petSprites/hydra-eat1.png"
import hydraE2 from "./petSprites/hydra-eat2.png"

import capyI1 from "./capycornIdle/capycorn-idle1.png"
import capyI2 from "./capycornIdle/capycorn-idle2.png"
import capyH1 from "./petSprites/capycorn-happy1.png"
import capyH2 from "./petSprites/capycorn-happy2.png"
import capyS1 from "./petSprites/capycorn-sad1.png"
import capyS2 from "./petSprites/capycorn-sad2.png"
import capyA1 from "./petSprites/capycorn-angry1.png"
import capyA2 from "./petSprites/capycorn-angry2.png"
import capyD1 from "./petSprites/capycorn-dead1.png"
import capyD2 from "./petSprites/capycorn-dead2.png"
import capyE1 from "./petSprites/capycorn-eat1.png"
import capyE2 from "./petSprites/capycorn-eat2.png"

import { Texture } from "pixi.js"

const hydraIArr = [hydraI1, hydraI2]
const hydraHArr = [hydraH1, hydraH2] // Happy
const hydraSArr = [hydraS1, hydraS2] // Sad
const hydraAArr = [hydraA1, hydraA2] // Angry
const hydraDArr = [hydraD1, hydraD2] // Dead
const hydraEArr = [hydraE1, hydraE2] // Eating

const capyIArr = [capyI1, capyI2]
const capyHArr = [capyH1, capyH2] // Happy
const capySArr = [capyS1, capyS2] // Sad
const capyAArr = [capyA1, capyA2] // Angry
const capyDArr = [capyD1, capyD2] // Dead
const capyEArr = [capyE1, capyE2] // Eating

//change the functions name from 'fetch' to 'animFrames'
const animFrames = (frames:any) => {
  const textureArr = frames.map((element:any) => Texture.from(element))
  return textureArr
}

const Hydra_Idle: Texture[] = animFrames(hydraIArr)
const Hydra_Happy: Texture[] = animFrames(hydraHArr)
const Hydra_Sad: Texture[] = animFrames(hydraSArr)
const Hydra_Angry: Texture[] = animFrames(hydraAArr)
const Hydra_Dead: Texture[] = animFrames(hydraDArr)
const Hydra_Eating: Texture[] = animFrames(hydraEArr)

const Capycorn_Idle: Texture[] = animFrames(capyIArr)
const Capycorn_Happy: Texture[] = animFrames(capyHArr)
const Capycorn_Sad: Texture[] = animFrames(capySArr)
const Capycorn_Angry: Texture[] = animFrames(capyAArr)
const Capycorn_Dead: Texture[] = animFrames(capyDArr)
const Capycorn_Eating: Texture[] = animFrames(capyEArr)

export {Hydra_Idle, Hydra_Happy, Hydra_Sad, Hydra_Angry, Hydra_Dead, Hydra_Eating,
  Capycorn_Idle, Capycorn_Happy, Capycorn_Sad, Capycorn_Angry, Capycorn_Dead, Capycorn_Eating}


// if HP >= 81 and Happy > 50 and Hunger > 50
//   Happy

// else if HP >= 51 and Happy > 50 and Hunger > 50
//  Idle

// else if HP >= 21
// Sad

// else2
// Dead