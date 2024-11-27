let currentHp: number = 25
const  maxHp: number = 50


function increaseHp(currentHp: number, increment: number = 5, maxHp: number = 50): number {
    const newHp = Math.min(currentHp + increment, maxHp); // Ensure it doesn't exceed maxHp
    console.log(`HP increased to ${newHp}`);
    return newHp;
}

function updateHpBar(currentHp: number, maxHp: number): void {
    const hpBar = document.getElementById("hp-bar") as HTMLElement;
    const percentage = (currentHp / maxHp) * 100;
    hpBar.style.width = `${percentage}%`; // Update width based on current HP
}

currentHp = increaseHp(currentHp, 5, maxHp); // Increase HP by 5
updateHpBar(currentHp, maxHp); 