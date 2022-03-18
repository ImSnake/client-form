import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:3002',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {

	getAppStates() {
		return apiClient.get('/appStates');
	},

	getUserData() {
		return apiClient.get('/userData');
	},

	getMeetingData() {
		return apiClient.get('/meetingData');
	}
}




