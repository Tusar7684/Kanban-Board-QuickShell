


import React from 'react';
import './userBasedCard.css';
import urgentGrey from '../../assets/SVG - Urgent Priority grey.svg';
// import progress from "../../utils/progress.js";
import prior from "../../utils/constant.js";

const UserBasedCard = ({ id = "CAM-1", priority = 0, title = "No Title Available", tag = [] }) => {

    // Helper variable for long titles
    const displayedTitle = title.length > 60 ? `${title.slice(0, 59)}...` : title;

    return (
        <div className="card-container">
            <div className="card-header">
                <span className='card-id'>{id}</span>
                <div className='profile'>
                    <img
                        src="https://raw.githubusercontent.com/CHEPHYTY/email-images/refs/heads/main/logo.png"
                        alt="profile avatar"
                        className='profile-avatar'
                    />
                    <span className='profile-dot'></span>
                </div>
            </div>
            <div className="card-body">
                <span className='card-title'>{displayedTitle}</span>
            </div>

            <div className="card-footer">
                <div className="priority">
                    <img src={prior[priority] || urgentGrey} alt={`Priority level ${priority}`} />
                </div>

                <div className='card-tags'>
                    {tag.length > 0 ? (
                        tag.map((t, index) => (
                            <div key={index} className='card-tag'>
                                <span className='tag-dot' />
                                <p className='tag-title'>{t}</p>
                            </div>
                        ))
                    ) : (
                        <div className='card-tag'>
                            <span className='tag-dot' />
                            <p className='tag-title'>No Tags</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserBasedCard;
