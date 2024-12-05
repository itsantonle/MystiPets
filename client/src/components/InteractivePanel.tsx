import 'bootstrap/dist/css/bootstrap.min.css'
import { manageHappiness } from '../utils/interfaceUtil/happinessBarUtil';
import happyStar from '../components/img/icons/happy_star.png';
import meat from '../components/img/icons/meat.png';
import feedButton from '../components/img/icons/feedButton.png';
import playButton from '../components/img/icons/playButton.png';
import { getValues } from './DB_PanelLink';
import { manageHunger } from '../utils/interfaceUtil/hungerBarUtil';
import healthBarFrame from "./img/icons/health-bar-frame-1.png"
import AnimatedHealthBar from './healthbar'
// import * as React from "react"
import { manageHealth} from '../utils/interfaceUtil/healthBarUtil';

const Panel = () => {
    // //Uncomment if reall DB is connected
    // const { happyValue, hungerValue, healthValue, error, loading } = getValues();

    const { isHappyValue, isPlayingClicked } = manageHappiness();
    const { isHungryValue, isEatingClicked } = manageHunger();
    const {trackHungerIncrease, trackHappinessIncrease} = manageHealth();

    const eatingUtils = () => {
        isEatingClicked();
        trackHungerIncrease();
    }

    const playingutils = () => {
        isPlayingClicked();
        trackHappinessIncrease();
    }

    return (
        <div className = "panel-container position-absolute top-80 start-50 translate-middle">
            <div className = "counter-container">
                {/* Delete after DB implementation -------------*/} 
                <div className = "counter-style"> <img src={happyStar} className="img-fluid" />: {isHappyValue} </div>
                <div className = "counter-style"> <img src={meat} className="img-fluid" />: {isHungryValue} </div>
                {/* --------------------------------- */}


                {/* Uncomment if reall DB is connected */}
                {/* <div className = "counter-style"> <img src={happyStar} className="img-fluid" />: {loading ? 'Loading...' : error ? `Error: ${error}` :isHappyValue} </div>
                <div className = "counter-style"> <img src={meat} className="img-fluid" />: {loading ? 'Loading...' : error ? `Error: ${error}` : isHungryValue} </div> */}
                
            </div>

            <div className="name-bar-button-container">
                <div className="name-buttons-container">
                    <textarea className = "name-text-style" placeholder="Pet Name" readOnly></textarea>

                    <button className = "button-style" type = "button" onClick={eatingUtils}><img src={feedButton} className="img-fluid"/></button>
                    <button className = "button-style" type = "button" onClick={playingutils}><img src={playButton} className="img-fluid"/></button>
                    <button className = "button-style" type = "button" onClick={isPlayingClicked}><img src={playButton} className="img-fluid"/></button>
                </div>
                <div className="health-bar-style"> 
                    <textarea className = "HP-text-style" placeholder="HP:" readOnly></textarea>
                    <div>
                        <img src = {healthBarFrame} className="health-bar-frame"/>
                        <AnimatedHealthBar/>
                    </div>
                </div>
            </div>

            <div className="mood-container">
                <textarea className = "mood-style" placeholder="Mood" readOnly></textarea>
            </div>
            
        </div>
    )
}

export default Panel;