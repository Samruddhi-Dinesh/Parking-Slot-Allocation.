import axios from 'axios'
    import React , {useState,useEffect} from 'react'
    
    export  function ViewVehicleByVehicleNumber(){
    
        const[vehicleNumber,setVehicleNumber]=useState()
        const[vehicle,setVehicle]=useState({})
        const[idFromBtn,setIdFromBtn]=useState()
    
        useEffect(()=>
        {
            axios.get(`http://localhost:8085/vehicle/${vehicleNumber}`)
            .then(response=>
                {
                    console.log(response.data)
                    setVehicle(response.data)
                })
                .catch(error=>console.log(error))
        }, [idFromBtn]
        )
    
        return(
            <div>
                <h3>Get Vehicle</h3>
                <hr/>
                <div className="form-group">
                    <label>Vehicle Number</label>
                    <input value={vehicleNumber} onChange={(event)=>setVehicleNumber(event.target.value)} className="form-control"required/>
    
                </div>
                <button onClick={ ()=>setIdFromBtn(vehicleNumber)} className="btn btn-primary m-2">Search</button>
                <hr/>
                {
                    vehicle && <div>
                        <h3>Vehicle Number: {vehicleNumber} Details</h3>
                        <ul className="list-group">
                        <li className="list-group-item list-group-item-success">vehicleCompany: {vehicle.vehicleCompany}</li>
                            <li className="list-group-item list-group-item-success">vehicleId: {vehicle.vehicleId}</li>
                            <li className="list-group-item list-group-item-success">vehicleModel: {vehicle.vehicleModel}</li>
                            <li className="list-group-item list-group-item-success">vehicleNumber: {vehicle.vehicleNumber}</li>
                            <li className="list-group-item list-group-item-success">vehicleType: {vehicle.vehicleType}</li>
                        </ul>
                        </div>
                }
            </div>
        )
    }