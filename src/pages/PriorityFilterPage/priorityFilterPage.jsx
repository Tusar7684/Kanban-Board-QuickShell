
import React from "react";
import "./priorityFilterPage.css"; // Ensure your CSS file is correctly linked
import HeaderTitle from "../../components/headerTitle/headerTitle.jsx";
import UserBasedCard from "../../components/UserBasedCard/userBasedCard.jsx";
import progress from "../../utils/progress";  // Ensure correct import for status and priority icons

const PriorityFilterPage = ({ tickets }) => {
    // Log the tickets for debugging
    console.log("Tickets data in PriorityFilterPage:", tickets);

    if (!tickets || tickets.length === 0) {
        return <div>No tickets available</div>;  // Handle the case when no tickets are present
    }

    // Function to render sections based on priority
    const renderPrioritySection = (ticketList, priorityLabel) => {
        const ticketCount = ticketList.length;

        if (ticketCount > 0) {
            return (
                <div className={`priority-list ${priorityLabel.toLowerCase()}`}>
                    <HeaderTitle
                        image={progress[priorityLabel]}  // Use priority icon from progress object
                        whatTodo={priorityLabel}
                        actionCount={ticketCount}
                    />
                    {ticketList.map((ticket, index) => (
                        <UserBasedCard key={index} {...ticket} priorityStatus={priorityLabel} />
                    ))}
                </div>
            );
        }
        return null; // Return nothing if no tickets for a priority
    };

    // Filter tickets by priority
    const highPriorityTickets = tickets.filter((ticket) => ticket.priority === "High");
    const lowPriorityTickets = tickets.filter((ticket) => ticket.priority === "Low");
    const midPriorityTickets = tickets.filter((ticket) => ticket.priority === "Mid");
    const urgentPriorityTickets = tickets.filter((ticket) => ticket.priority === "Urgent");
    const inProgressPriorityTickets = tickets.filter((ticket) => ticket.priority === "In-progress");
    const noPriorityTickets = tickets.filter((ticket) => ticket.priority === "No-priority");

    return (
        <div className="priority-page">
            {/* Render sections based on priority */}
            {renderPrioritySection(highPriorityTickets, "High")}
            {renderPrioritySection(lowPriorityTickets, "Low")}
            {renderPrioritySection(midPriorityTickets, "Mid")}
            {renderPrioritySection(urgentPriorityTickets, "Urgent")}
            {renderPrioritySection(inProgressPriorityTickets, "In-progress")}
            {renderPrioritySection(noPriorityTickets, "No-priority")}
        </div>
    );
};

export default PriorityFilterPage;
