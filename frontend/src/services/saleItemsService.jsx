import axios from "axios";
import {GET_ITEMS_ENDPOINT} from "../config";

export const getItems = () => axios.get(GET_ITEMS_ENDPOINT);
