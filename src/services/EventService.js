import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:3002',
	//baseURL: 'http://start.vvk-t.ru/app',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {

	getConnectionStatuses() {
		//ajaxSend('/connectionStatuses', "GET", {}, 0)
		return apiClient.get('/connectionStatuses');
	},

	getOrderDetails(orderId) {
		console.log('get Order Details: ' + orderId);
		//ajaxSend('/orderDetails', "GET", {}, 0)
		return apiClient.get('/orderDetails');
	},

	getCustomerData() {
		//ajaxSend('/customerData', "GET", {}, 0)
		return apiClient.get('/customerData');
	}
}




