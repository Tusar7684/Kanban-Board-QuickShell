
import React from "react";
import "./statusFilterPage.css";
import HeaderTitle from "../../components/headerTitle/headerTitle.jsx";
import UserBasedCard from "../../components/UserBasedCard/userBasedCard.jsx";
import progress from "../../utils/progress.js";

// Define a constant to map status to class names
const statusClassNames = {
    Backlog: "back-log-list",
    Todo: "todo-list",
    "In progress": "in-progress-list",
    Done: "done-list",
    Cancelled: "cancelled-list"
};

const StatusFilterPage = ({ tickets }) => {
    // Helper function to render ticket sections
    const renderTicketSection = (ticketList, statusLabel, progressKey) => {
        const ticketCount = ticketList.length;

        if (ticketCount > 0) {
            return (
                <div className={statusClassNames[statusLabel]}>
                    <HeaderTitle
                        image={progress[progressKey] || progress.default} // Fallback to default if progress key doesn't exist
                        whatTodo={statusLabel}
                        actionCount={ticketCount}
                    />
                    {ticketList.map((ticket, index) => (
                        <UserBasedCard key={index} {...ticket} progressStatus={statusLabel} />
                    ))}
                </div>
            );
        }
        return null;
    };

    // Filter tickets by status
    const backLogTickets = tickets.filter((ticket) => ticket.status === "Backlog");
    const todoTickets = tickets.filter((ticket) => ticket.status === "Todo");
    const inProgressTickets = tickets.filter((ticket) => ticket.status === "In progress");
    const doneTickets = tickets.filter((ticket) => ticket.status === "Done");
    const cancelledTickets = tickets.filter((ticket) => ticket.status === "Cancelled");

    return (
        <div className="status-page">
            {renderTicketSection(backLogTickets, "Backlog", "Backlog")}
            {renderTicketSection(todoTickets, "Todo", "Todo")}
            {renderTicketSection(inProgressTickets, "In progress", "In progress")}
            {renderTicketSection(doneTickets, "Done", "Done")}
            {renderTicketSection(cancelledTickets, "Cancelled", "Cancelled")}
        </div>
    );
};

export default StatusFilterPage;
