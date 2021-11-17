import axios from 'axios'
export class AddPaymentService {
    url="http://localhost:8085/Payment/savePayment"
    addPayment(payment)
    {
        return axios.post(this.url,payment)
    }
}
export default new AddPaymentService();