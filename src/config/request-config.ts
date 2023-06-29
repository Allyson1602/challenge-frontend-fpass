import axios, { AxiosInstance, AxiosResponse } from "axios";
import md5 from "md5";

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
const privatekey = import.meta.env.VITE_PRIVATE_KEY;

api.defaults.params = {
	ts,
	apikey,
	hash: md5(ts + privatekey + apikey)
}

export default api;