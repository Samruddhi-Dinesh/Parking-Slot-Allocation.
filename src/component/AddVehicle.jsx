import React,{ Component } from "react";
import ContactService from "./services/ContactService";




export  class AddVehicle extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            vehicleCompany:'',
            vehicleId:'',
            vehicleModel:'',
            vehicleNumber:'',
            vehicleType:'',
            msg:'',
           error:''
        }
    }
    
   
    handleVehicleCompany=(event)=>
    {
        this.setState({
            vehicleCompany:event.target.value
        })
    }

    handleVehicleId=(event)=>
    {
        this.setState({
            vehicleId:event.target.value
        })
    }
    handleVehicleModel=(event)=>
    {
        this.setState({
            vehicleModel:event.target.value
        })
    }
    handleVehicleNumber=(event)=>
    {
        this.setState({
            vehicleNumber:event.target.value
        })
    }
     handleVehicleType=(event)=>
    {
        this.setState({
            vehicleType:event.target.value
        })
    }
    handleForSubmission=(event)=>
    {
        event.preventDefault();
        this.saveVehicle(this.state) ; 
        console.log(this.state);
    }
    saveVehicle(vehicle){
        ContactService.addVehicle(vehicle).then(response=>
            {
                console.log(response)
                this.setState({
                    msg:"Successfully Added"
                });
            })
            .catch(error=>{console.log(error);
            this.setState({
                msg:"Enter Valid Details"
            });
        }) ;
    }
   
    saveVehicle(vehicle)
    {

        ContactService.addVehicle(vehicle).then( response=>
        {
        console.log(response)
        this.setState({
            vehicleCompany:'',
            vehicleId:'',
            vehicleModel:'',
            vehicleNumber:'',
            vehicleType:''
        })
        }).catch(error=>console.log(error))

    }
    render()
    {
        
        return(
            <div className="container">
                <h2 className="text-info">Add Vehicle</h2>
                <hr/>
                <form onSubmit={this.handleForSubmission}>
                

                    <div className="form-group">
                        <label> Vehicle Company </label>
                        <input  onChange={this.handleVehicleCompany} value={this.state.vehicleCompany}className="form-control"required/>
                    </div>
                    <div className="form-group">
                        <label> Vehicle Id </label>
                        <input  onChange={this.handleVehicleId} value={this.state.vehicleId} className="form-control"required/>

                    </div>
                    <div className="form-group">
                        <label> Vehicle Model </label>
                        <input  onChange={this.handleVehicleModel} value={this.state.vehicleModel} className="form-control"required/>

                    </div>
                    <div className="form-group">
                        <label> Vehicle Number </label>
                        <input  onChange={this.handleVehicleNumber} value={this.state.vehicleNumber} className="form-control"required/>

                    </div>
                     
                    <div className="form-group">
                        <label> Vehicle Type </label>
                        <input  onChange={this.handleVehicleType} value={this.state.vehicleType} className="form-control"required/>

                    </div>
                    <div>
                    <button className="btn btn-primary mt-2"> Add </button>
                    </div>
                </form>

            </div>
        )
    }

}