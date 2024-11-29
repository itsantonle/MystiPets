import 'bootstrap/dist/css/bootstrap.min.css'
import { manageHappiness } from '../utils/interfaceUtil/happinessBarUtil';
import happyStar from '../components/img/icons/happy_star.png';
import meat from '../components/img/icons/meat.png';
import healthBar from '../components/img/icons/health-bar1.png'
import feedButton from '../components/img/icons/feedButton.png'
import playButton from '../components/img/icons/playButton.png'
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
                <div className = "counter-style"> <img src={happyStar} className="img-fluid" />: {isHappyValue} </div>
                <div className = "counter-style"> <img src={meat} className="img-fluid" />: {isHungryValue} </div>

                {/* Uncomment if reall DB is connected */}
                {/* <div className = "counter-style"> : {loading ? 'Loading...' : error ? `Error: ${error}` :happyValue} </div>
                <div className = "counter-style"> : {loading ? 'Loading...' : error ? `Error: ${error}`: hungerValue} </div> */}

                {/* Delete after DB is connected ---------------*/}
                {/* <div className = "counter-style"> : {isHappyValue} </div>
                <div className = "counter-style"> : {isHungryValue} </div> */}
                {/* ---------------------- */}
            </div>

            <div className="name-bar-button-container">
                <div className="name-buttons-container">
                    <textarea className = "name-text-style" placeholder="Pet Name" readOnly></textarea>

                    <button className = "button-style" type = "button" onClick={isEatingClicked}><img src={feedButton} className="img-fluid"/></button>
                    <button className = "button-style" type = "button" onClick={isPlayingClicked}><img src={playButton} className="img-fluid"/></button>
                    <button className = "button-style" type = "button" onClick={isPlayingClicked}><img src={playButton} className="img-fluid"/></button>
                </div>
                <div className="health-bar-style"> 
                    <textarea className = "HP-text-style" placeholder="HP" readOnly></textarea> 
                    <img src={healthBar} className="img-fluid"/>
                </div>
            </div>

            <div className="mood-container">
                <textarea className = "mood-style" placeholder="putangina ninyong lahat!" readOnly></textarea>
            </div>
            
        </div>
    )
}

export default Panel;