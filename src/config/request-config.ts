import axios, { AxiosInstance, AxiosResponse } from "axios";

export type IResponse<T> = Promise<AxiosResponse<T, any>>;

const api: AxiosInstance = axios.create({
	baseURL: "https://gateway.marvel.com/v1/public/characters",
	timeout: 5000,
	headers: {
		"content-Type": "application/json",
	},
});

const ts = new Date().getTime();
const apikey = import.meta.env.VITE_PUBLIC_KEY;

api.defaults.params = {
	ts,
	apikey,
}

export default api;