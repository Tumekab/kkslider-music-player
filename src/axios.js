// import the axios library
import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
baseURL: "https://acnhapi.com/v1/",
headers: {
    Accept: "application/json",
    },
});