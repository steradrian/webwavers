import React, { useEffect, useState } from 'react';
import './Home.css';
import { moons } from './sliderinfo';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton, Button } from '@material-ui/core';

const Home = () => {
    const [id, setId] = useState(1);
    const [isLeft, setIsLeft] = useState('left');

    const [selectedMoon, setSelectedMoon] = useState(moons.find((moon) => {
        return moon.id === 1;
    }));
    
    const nextMoon = (e) => {
        e.preventDefault();
        
        if (id < moons.length) {
            setId(id + 1);
        } else {
            setId(1);
        }
        
        setSelectedMoon(moons.find((moon) => {
            return moon.id === id;
        }))
        setIsLeft('right');
    }

    const prevMoon = (e) => {
        e.preventDefault();
        
        if (id > 1) {
            setId(id - 1);
        } else {
            setId(moons.length);
        }
        
        setSelectedMoon(moons.find((moon) => {
            return moon.id === id;
        }))
        setIsLeft('right');
    }


    return (
        <div className="home">
            <div className="home__left">
                <IconButton onClick={prevMoon}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <div className="home__mid">
                <img src={selectedMoon.image} alt={selectedMoon.title} className={`${isLeft === 'left' ? 'roll-in-blurred-left' : 'roll-in-blurred-right'}`}/>
                <div className="home__infocard triangle">
                    <div className="home__infocardText">
                        <h1>{selectedMoon.title}</h1>
                        <p className="line-clamp">{selectedMoon.text}</p>
                    </div>
                    <div className="home__infocardPrice">
                        <div className="home__infocardPriceText">
                            <h1>{selectedMoon.price} €</h1>
                            <p>one way ticket</p>
                        </div>
                            
                        <div className="infocard__button">
                            <Button><strong>Buy</strong></Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="home__right">
                <IconButton onClick={nextMoon}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Home
