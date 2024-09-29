

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import "./Navbar.css";
import display from "../../assets/Display.svg";
import dropdown from "../../assets/down.svg";

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('Display');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const options = ['Status', 'User'];
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    const optionToRoute = {
        'Status': '/',
        'User': '/user-filter',
        'Priority': '/priority-filter',
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        navigate(optionToRoute[option]);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={display} alt="" />
                    <span className="display">{selectedOption}</span>
                    <img src={dropdown} alt="" className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
                </button>

                {isDropdownOpen && (
                    <ul className="options">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`option ${option === selectedOption ? 'active' : ''}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Outlet />
        </div>
    );
};

export default Navbar;
