import axios from 'axios';

const secret = localStorage.getItem('token');

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'https://api.shartech.com.br/',
	headers: { Authorization: `Bearer ${secret}` },
});
