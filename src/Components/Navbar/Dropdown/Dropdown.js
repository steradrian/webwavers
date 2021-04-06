import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({className}) => {
    return (
        <div className={`dropdown ${className}`}>
            <div className="dropdown__options">
                <Link>
                    Home
                </Link>
                <Link>
                    Projects
                </Link>
                <Link>
                    Services    
                </Link>
            </div>
        </div>
    )
}

export default Dropdown
