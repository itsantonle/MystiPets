import healthBarFrame from "./img/icons/health-bar-frame-1.png"
import { AnimatedHealthBar } from "./healthbar"


export const HealthBarDisplay = () => {
  return (
    <div className="interactive-panel__health">
      <span className="interactive-panel__health-label">HP:</span>
      <div className="interactive-panel__health-bar-container">
        <img
          src={healthBarFrame}
          className="interactive-panel__health-frame"
        />
        <div className="interactive-panel__health-bar">
          <AnimatedHealthBar />
        </div>
      </div>
    </div>
  )
}

export default HealthBarDisplay
