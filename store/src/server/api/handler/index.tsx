import axios from "axios";
import { AppUrl } from "../constants/backend";

export const ServerHandler = axios.create({
	baseURL : AppUrl
})