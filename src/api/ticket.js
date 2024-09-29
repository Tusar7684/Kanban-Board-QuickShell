import axios from "axios";

const show = () =>
    axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
const ticketApi = { show };
console.log(ticketApi);
export default ticketApi;