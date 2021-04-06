import React from 'react';
import './PFL.css';
import Case from '../../misc/pfl/case.png';
import Rocket from '../../misc/pfl/rocket.png';
import Leaf from '../../misc/pfl/leaf.png';

const PFL = () => {
    return (
        <div className="pfl">
            <div className="pfl__dark">
                <div className="pfl__darkContainer">
                    <img src={Case} alt="" />
                    <h1><strong>pack</strong></h1>
                </div>
                <div className="pfl__darkContainer">
                    <img src={Rocket} alt="" />
                    <h1><strong>fly</strong></h1>
                </div>
                <div className="pfl__darkContainer">
                    <img src={Leaf} alt="" />
                    <h1><strong>live</strong></h1>
                </div>
            </div>
            
            <div className="pfl__light">
                <h1>PFL package</h1>
            </div>
        </div>
    )
}

export default PFL
