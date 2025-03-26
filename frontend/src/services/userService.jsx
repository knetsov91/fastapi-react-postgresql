import axios from "axios"
import {BACKEND_URL} from "../config";

export const getUsers = () => {
    return axios.get(`${BACKEND_URL}/users`)
}