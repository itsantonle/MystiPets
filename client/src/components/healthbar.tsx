import React, {useRef, useEffect, useState} from "react";
import * as PIXI from "pixi.js"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";

const {isHealthyValue} = manageHealth()

export const healthBar: React.FC = () => {
    const healthSegments = 10
    const partW = 17
    const partH = 26

    const healtBarPartsG = [
        './img/icons/health1green.png',
        './img/icons/health2green.png',
        './img/icons/health3green.png',
        './img/icons/health4green.png',

    ]

    const healtBarPartsY = [
        './img/icons/health3yellow.png',
        './img/icons/health1yellow.png',
        './img/icons/health2yellow.png',

    ]

    const healtBarPartsR = [
        './img/icons/health1red.png',
        './img/icons/health2red.png',
        './img/icons/health3red.png',

    ]

    

    const colorChange = (isHealthyValue: number) => {
        return isHealthyValue >50? healtBarPartsG : isHealthyValue > 20? healtBarPartsY : healtBarPartsR
    }

    const bar = new PIXI.Application({})
}

// const HealthBar: React.FC = () => {
//   const healthBarRef = useRef<HTMLDivElement | null>(null);
//   const [health, setHealth] = useState(100); // Full health

//  

//   useEffect(() => {
//     if (!healthBarRef.current) return;

//     const app = new PIXI.Application({
//       view: healthBarRef.current,
//       width: chunkWidth * totalChunks,
//       height: chunkHeight,
//       transparent: true,
//     });

//     const healthContainer = new PIXI.Container();
//     app.stage.addChild(healthContainer);

//     // Create and position chunks dynamically
//     const healthChunks: PIXI.Sprite[] = [];

//     const createChunks = () => {
//       chunkImages.forEach((image, index) => {
//         const chunk = PIXI.Sprite.from(image);
//         chunk.x = index * chunkWidth;
//         chunk.y = 0;
//         chunk.tint = getChunkColor(100); // Set initial color to green
//         healthChunks.push(chunk);
//         healthContainer.addChild(chunk);
//       });
//     };

//     createChunks();

//     const updateHealthBar = () => {
//       const healthPercentage = (health / 100) * 100; // Health as percentage

//       const visibleChunks = Math.max(2, Math.floor((healthPercentage / 100) * (totalChunks - 2)) + 2); // Show at least chunks 1 and 4

//       healthChunks.forEach((chunk, index) => {
//         chunk.visible = index === 0 || index === healthChunks.length - 1 || index < visibleChunks; // Show chunk 1, 4, and the middle ones based on health
//         if (chunk.visible) {
//           chunk.tint = getChunkColor(healthPercentage); // Update chunk color based on health
//         }
//       });
//     };

//     // Reduce health every 5 seconds
//     const hungerTimer = setInterval(() => {
//       if (health > 0) {
//         setHealth((prevHealth) => Math.max(prevHealth - 10, 0)); // Decrease health by 10
//       }
//     }, 5000);

//     updateHealthBar(); // Initial health update

//     return () => {
//       clearInterval(hungerTimer); // Cleanup interval on unmount
//       app.destroy(true, { children: true }); // Destroy PixiJS app
//     };
//   }, [health]);

//   return <div ref={healthBarRef}></div>; // PixiJS container
// };

// export default HealthBar;
