import axios from "axios"

class AdminService
{
    url="http://localhost:8085/admin/add"
    saveParkingPremise(admin)
    {
        return axios.post(this.url,admin)

    }
}
export default new AdminService()