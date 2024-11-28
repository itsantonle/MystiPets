import 'bootstrap/dist/css/bootstrap.min.css'
import { manageHappiness } from '../utils/interfaceUtil/happinessBarUtil';

const Panel = () => {
    const happinessValue = ''
    const hungerValue = ''

    return (
        <div className = "panel-container">
            <div className = "counter-container">
                <div className = "counter-style"> &#9825;: {happinessValue} </div>
                <div className = "counter-style"> &#167;: {hungerValue} </div>
            </div>

            <div className="name-bar-button-container">
                <div className="name-buttons-container">
                    <textarea className = "name-text-style" placeholder="Pet Name" readOnly></textarea>

                    <button className = "button-style" type = "button" onClick={manageHappiness}>P</button>
                    <button className = "button-style" type = "button" onClick={manageHappiness}>F</button>
                    <button className = "button-style" type = "button" onClick={manageHappiness}>S</button>
                </div>
                <div className="health-bar-style">  ============Health Bar Here==========</div>
            </div>

            <div className="mood-container">
                <textarea className = "mood-style" placeholder="The quick brown Fox jumps over the lazy Dog." readOnly></textarea>
            </div>
            
        </div>
    )
}

export default Panel;