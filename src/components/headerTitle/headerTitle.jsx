import React from 'react';
import './headerTitle.css';
import defaultImage from "../../assets/in-progress.svg";
import plusIcon from "../../assets/add.svg";
import menuIcon from "../../assets/3 dot menu.svg";

const HeaderTitle = ({ image = defaultImage, whatTodo = "Tasks", actionCount = 0 }) => {
    return (
        <div className="header-title">
            <div className="left-items">
                <img src={image} alt={`${whatTodo} icon`} className="status-icon" />
                <span className="what-todo">{whatTodo}</span>
                <span className="action-count">{actionCount}</span>
            </div>
            <div className="right-items">
                <span className="action-button"><img src={plusIcon} alt="Add new task" /></span>
                <span className="action-button"><img src={menuIcon} alt="Menu" /></span>
            </div>
        </div>
    );
};

export default HeaderTitle;
