
import axios from 'axios'
import React ,{useEffect,useState} from 'react'

export  function DisplayAllParkingSlots() {
  
    const[parkingslot,setParkingSlot]=useState([])


    useEffect(()=>
    {
        axios.get("http://localhost:8085/parkingslot/allps")
             .then(response=>{
                 console.log(response.data)
                 setParkingSlot(response.data)
             })
         .catch(error=>console.log(error))
        },[]) 
     

     return(
        
        <div className="container-m2">
        <h2 className="text-info">Display All Parking Slot</h2>
        <hr/>
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>parkingSlotId</th>
                    <th>parkingDate</th>
                    <th>parkingTime</th>
                    <th>parkingDuration</th>
                    <th>parkingFloorId</th>
                    <th>floorNumber</th>
                    <th>numberOfParkingSlots</th>
                    <th>parkingPremiseId</th>
                    <th>parkingPremiseName</th>
                    <th>numberOfParkingFloors</th>
                    <th>addressId</th>
                    <th>city</th>
                    <th>state</th>
                    <th>pin</th>
                </tr>
            </thead>
            <tbody>
                {
                    parkingslot.map(parkingslot=>
                    (
                        <tr key={parkingslot.parkingSlotId}>
                                
                            <td>{parkingslot.parkingSlotId}</td>
                            <td>{parkingslot.parkingDate}</td>
                            <td>{parkingslot.parkingTime}</td>
                            <td>{parkingslot.parkingDuration}</td>
                            <td>{parkingslot.parkingFloorId}</td>
                            <td>{parkingslot.floorNumber}</td>
                            <td>{parkingslot.numberOfParkingSlots}</td>
                            <td>{parkingslot.parkingPremiseId}</td>
                            <td>{parkingslot.parkingPremiseName}</td>
                            <td>{parkingslot.numberOfParkingFloors}</td>
                            <td>{parkingslot.addressId}</td>
                            <td>{parkingslot.city}</td>
                            <td>{parkingslot.state}</td>
                            <td>{parkingslot.pin}</td>
                                
                         </tr>

                    ))
                }
            </tbody>
        </table>
        </div>
     )
 }
