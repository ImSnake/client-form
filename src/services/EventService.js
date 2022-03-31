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

	getConnectionStatuses() {
		return apiClient.get('/connectionStatuses');
	},

	getOrderDetails(orderId) {
		console.log('get Order Details: ' + orderId);
		return apiClient.get('/orderDetails');
	},

	getCustomerData() {
		return apiClient.get('/customerData');
	}
}




