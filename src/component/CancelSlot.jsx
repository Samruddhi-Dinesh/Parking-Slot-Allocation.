import React,{useState,useEffect} from 'react'
import axios from 'axios'

export function CancelSlot() {
  
   const[slotId,setslotId] = useState()
   const[parkingslot,setParkingSlot]=useState()
   const[idFromBtn,setIdFromBtn]=useState()

   useEffect(()=>
   {
     axios.delete(`http://localhost:8085/parkingslot/delete/${slotId}`)
     .then(response=>{
         console.log(response.data)
         setParkingSlot(response.data)
     })
     .catch(error=>console.log(error))
   },[idFromBtn]
   )
        
     return (
            <div className ="container">
               <h2>Delete Slot By Id</h2>
               <hr/>
                    <div className="form-group">
                        <label> parkingSlotId</label>
                        <input value={slotId} onChange={(event)=>setslotId(event.target.value)} className="form-control"required/>
                        </div>
                        <button onClick={()=>setIdFromBtn(slotId)}className="m-2 btn-primary">Search</button>
                        <hr/>
                        {
                    parkingslot && <div>
                        <h3>Parking Slot Id: {slotId} Deleted</h3>
                        </div>
}
                        </div>)}