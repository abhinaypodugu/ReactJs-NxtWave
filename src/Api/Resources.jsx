import axios from "axios";

const Api = axios.create({
    baseURL: "https://media-content.ccbp.in/website/react-assignment/",
})

export default Api;