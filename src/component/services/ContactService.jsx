import axios from 'axios'
export class ContactService {
    url="http://localhost:8085/vehicle/addvehicle"
    addVehicle(vehicle)
    {
        return axios.post(this.url,vehicle)
    }
   
}
export default new ContactService()