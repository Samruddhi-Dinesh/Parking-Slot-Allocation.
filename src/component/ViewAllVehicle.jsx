import axios from 'axios'
import React ,{useEffect,useState} from 'react'

export  function ViewAllVehicle() {
  
    const[vehicle,setVehicle]=useState([])


    useEffect(()=>
    {
        axios.get('http://localhost:8085/vehicle/getallvehicles')
             .then(response=>{
                 console.log(response.data)
                 setVehicle(response.data)
             })
         .catch(error=>console.log(error))
        },[]) 
     

     return(
        
        <div className="container-m2">
        <h2 className="text-info">View All Vehicle</h2>
        <hr/>
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>vehicleCompany</th>
                    <th>vehicleId</th>
                    <th>vehicleModel</th>
                    <th>vehicleNumber</th>
                    <th>vehicleType</th>
        
                </tr>
            </thead>
            <tbody>
                {
                    vehicle.map(vehicle=>
                    (
                        <tr key={vehicle.vehicleId}>
                                
                            <td>{vehicle.vehicleCompany}</td>
                            <td>{vehicle.vehicleId}</td>
                            <td>{vehicle.vehicleModel}</td>
                            <td>{vehicle.vehicleNumber}</td>
                            <td>{vehicle.vehicleType}</td>
                            
                                
                         </tr>

                    ))
                }
            </tbody>
        </table>
        </div>
     )
 }