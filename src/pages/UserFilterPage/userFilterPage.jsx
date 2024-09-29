import React from 'react';
import './userFilterPage.css';
import HeaderTitle from "../../components/headerTitle/headerTitle.jsx";
import UserBasedCard from "../../components/UserBasedCard/userBasedCard.jsx";

const UserFilterPage = ({ users = [], tickets = [] }) => {

    // Helper function to render each user's section with their tickets
    const renderUserSection = (user) => {
        const userTickets = tickets.filter(ticket => ticket.userId === user.id); // Filter tickets for each user
        const ticketCount = userTickets.length;

        // Render the user's section only if they have tickets
        if (ticketCount > 0) {
            return (
                <div key={user.id} className="user-section">
                    <HeaderTitle
                        image={"https://raw.githubusercontent.com/CHEPHYTY/email-images/refs/heads/main/logo.png"} // You can customize this image
                        whatTodo={user.name} // User's name as the header
                        actionCount={ticketCount} // Number of tickets for this user
                    />
                    {/* Render User-Based Cards for this user's tickets */}
                    {userTickets.map((ticket, index) => (
                        <UserBasedCard key={index} {...ticket} />
                    ))}
                </div>
            );
        }
        return null; // Don't render if the user has no tickets
    };

    return (
        <div className="user-page">
            {users.length > 0 ? (
                // Render sections for each user if the users array is not empty
                users.map((user) => renderUserSection(user))
            ) : (
                <div className="no-users">No users found</div> // Show message if no users are available
            )}
        </div>
    );
};

export default UserFilterPage;
