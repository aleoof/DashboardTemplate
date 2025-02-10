import axios from 'axios';

const secret = localStorage.getItem('token');

export const api = axios.create({
	baseURL: 'http://api.shartech.com.br/',
	headers: { Authorization: `Bearer ${secret}` },
});
