import axios from 'axios';

const API_URL = 'https://medicobackend-drhi.onrender.com';

export const getDoctors = () => axios.get(`${API_URL}/api/doctors`);
export const getPatients = () => axios.get(`${API_URL}/api/patients`);
export const getTokens = () => axios.get(`${API_URL}/api/tokens`);
export const getSlots = () => axios.get(`${API_URL}/api/slots`);
export const bookToken = (data) => axios.post(`${API_URL}/api/tokens`, data);