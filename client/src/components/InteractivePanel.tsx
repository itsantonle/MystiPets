import 'bootstrap/dist/css/bootstrap.min.css'
import { manageHappiness } from '../utils/interfaceUtil/happinessBarUtil';
import { getValues } from './DB_PanelLink';
import { manageHunger } from '../utils/interfaceUtil/hungerBarUtil';
// import * as React from "react"

const Panel = () => {
    // //Uncomment if reall DB is connected
    // const { happyValue, hungerValue, healthValue, error, loading } = getValues();

    const { isHappyValue, isPlayingClicked} = manageHappiness()
    const {isHungryValue, isEatingClicked} = manageHunger()

    return (
        <div className = "panel-container position-absolute top-80 start-50 translate-middle">
            <div className = "counter-container">

                {/*Uncomment if reall DB is connected */}
                {/* <div className = "counter-style"> : {loading ? 'Loading...' : error ? `Error: ${error}` :happyValue} </div>
                <div className = "counter-style"> : {loading ? 'Loading...' : error ? `Error: ${error}`: hungerValue} </div> */}

                {/* Delete after DB is connected ---------------*/}
                <div className = "counter-style"> : {isHappyValue} </div>
                <div className = "counter-style"> : {isHungryValue} </div>
                {/* ---------------------- */}
            </div>

            <div className="name-bar-button-container">
                <div className="name-buttons-container">
                    <textarea className = "name-text-style" placeholder="Pet Name" readOnly></textarea>

                    <button className = "button-style" type = "button" onClick={isPlayingClicked}>P</button>
                    <button className = "button-style" type = "button" onClick={isEatingClicked}>F</button>
                    <button className = "button-style" type = "button">S</button>
                </div>
                <div className="health-bar-style">  HP:   |============|</div>
            </div>

            <div className="mood-container">
                <textarea className = "mood-style" placeholder="The quick brown Fox jumps over the lazy Dog." readOnly></textarea>
            </div>
            
        </div>
    )
}

export default Panel;