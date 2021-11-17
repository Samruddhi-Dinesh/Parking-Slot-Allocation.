import axios from 'axios'
  class ParkingService
{

    url="http://localhost:8085/parkingslot/Bookparkingslot"
    addparkingslot(parkingslot)
    {
      console.log(parkingslot)
       return  axios.post(this.url,parkingslot)
      
    }
   
}

export default new ParkingService()