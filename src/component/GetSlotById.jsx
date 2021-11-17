import React,{useState,useEffect} from 'react'
import axios from 'axios'

export function GetSlotById() {
  
   const[parkingId,setParkingId] = useState()
   const[parkingslot,setParkingSlot]=useState()
   const[idFromBtn,setIdFromBtn]=useState()

   useEffect(()=>
   {
     axios.get(`http://localhost:8085/parkingslot/findbyid/${parkingId}`)
     .then(response=>{
         console.log(response.data)
         setParkingSlot(response.data)
     })
     .catch(error=>console.log(error))
   },[idFromBtn]
   )
        
     return (
            <div className="container">
               <h2>Get Slot By Id</h2>
               <hr/>
                    <div className="form-group">
                        <label> parkingSlotId</label>
                        <input value={parkingId} onChange={(event)=>setParkingId(event.target.value)} className="form-control"required/>
                        </div>
                        <button onClick={()=>setIdFromBtn(parkingId)}className="m-2 btn-primary">Search</button>
                        <hr/>
                {
                    parkingslot && <div>
                        <h3>Parking Slot Id: {parkingId} Details</h3>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">parkingSlotId: {parkingslot.parkingSlotId}</li>
                            <li className="list-group-item list-group-item-success">parkingDate: {parkingslot.parkingDate}</li>
                            <li className="list-group-item list-group-item-success">parkingTime: {parkingslot.parkingTime}</li>
                            <li className="list-group-item list-group-item-success">parkingDuration: {parkingslot.parkingDuration}</li>
                            <li className="list-group-item list-group-item-success">parkingFloorId: {parkingslot.parkingFloorid}</li>
                            <li className="list-group-item list-group-item-success">floorNumber: {parkingslot.floorNumber}</li>
                            <li className="list-group-item list-group-item-success">numberOfParkingSlots: {parkingslot.numberOfParkingSlots}</li>
                            <li className="list-group-item list-group-item-success">parkingPremiseId: {parkingslot.parkingPremiseId}</li>
                            <li className="list-group-item list-group-item-success">parkingPremiseName: {parkingslot.parkingPremiseName}</li>
                            <li className="list-group-item list-group-item-success">numberOfParkingFloors: {parkingslot.numberOfParkingFloors}</li>
                            <li className="list-group-item list-group-item-success">addressId: {parkingslot.addressId}</li>
                            <li className="list-group-item list-group-item-success">city: {parkingslot.city}</li>
                            <li className="list-group-item list-group-item-success">state: {parkingslot.state}</li>
                            <li className="list-group-item list-group-item-success">pin: {parkingslot.pin}</li>
                           
                        </ul>
                        </div>
                }
            </div>
    )}
         