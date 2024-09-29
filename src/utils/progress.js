// Import all the SVG images from the assets folder
import backLog from "../assets/Backlog.svg";
import todo from "../assets/To-do.svg";
import inProgress from "../assets/in-progress.svg";
import done from "../assets/Done.svg";
import cancel from "../assets/Cancelled.svg";
import highPriority from "../assets/Img - High Priority.svg";
import lowPriority from "../assets/Img - Low Priority.svg";
import midPriority from "../assets/Img - Medium Priority.svg";
import urgentPriority from "../assets/SVG - Urgent Priority colour.svg";
import noPriority from "../assets/No-priority.svg";

// Combine both status and priority icons into the same object
const progress = {
    "Backlog": backLog,
    "Todo": todo,
    "In progress": inProgress,
    "Done": done,
    "Cancelled": cancel,
    "High": highPriority,
    "Low": lowPriority,
    "Mid": midPriority,
    "Urgent": urgentPriority,
    "No-priority": noPriority,
};

export default progress;
