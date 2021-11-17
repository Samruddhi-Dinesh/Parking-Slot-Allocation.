import React, { Component } from "react";
import ParkingService from "./services/ParkingService";

export class BookParkingSlot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parkingSlotId: "",
            parkingDate: "",
            parkingTime: "",
            parkingDuration: "",
            parkingFloorId: "",
            floorNumber: "",
            numberOfParkingSlots: "",
            parkingPremiseId: "",
            parkingPremiseName: "",
            numberOfParkingFloors: "",
            addressId: "",
            city: "",
            state: "",
            pin: "",
            msg: "",
            error: "",
        };
    }

    handleParkingSlotId = (event) => {
        this.setState({
            parkingSlotId: event.target.value,
        });
    };
    handleParkingDate = (event) => {
        this.setState({
            parkingDate: event.target.value,
        });
    };
    handleParkingTime = (event) => {
        this.setState({
            parkingTime: event.target.value,
        });
    };
    handleParkingDuration = (event) => {
        this.setState({
            parkingDuration: event.target.value,
        });
    };
    handleParkingFloorId = (event) => {
        this.setState({
            parkingFloorId: event.target.value,
        });
        console.log(event.target.value);
    };
    handleFloorNumber = (event) => {
        this.setState({
            floorNumber: event.target.value,
        });
    };
    handleNoOfParkingSlots = (event) => {
        this.setState({
            numberOfParkingSlots: event.target.value,
        });
    };
    handleParkingPremiseId = (event) => {
        this.setState({
            parkingPremiseId: event.target.value,
        });
    };
    handleParkingPremiseName = (event) => {
        this.setState({
            parkingPremiseName: event.target.value,
        });
    };
    handleNoOfParkingFloors = (event) => {
        this.setState({
            numberOfParkingFloors: event.target.value,
        });
    };
    handlePremiseAddressId = (event) => {
        this.setState({
            addressId: event.target.value,
        });
    };
    handleCity = (event) => {
        this.setState({
            city: event.target.value,
        });
    };
    handleState = (event) => {
        this.setState({
            state: event.target.value,
        });
    };
    handlePin = (event) => {
        this.setState({
            pin: event.target.value,
        });
    };

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.SaveSlot(this.state);
        console.log(this.state);
    };

    SaveSlot(parkingslot) {
        ParkingService.addparkingslot(parkingslot)
            .then((response) => {
                console.log(response);
                this.setState({
                    msg: "PARKING SLOT BOOKED SUCCESSFULLY",
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    msg: "Enter Valid Details",
                });
            });
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-info">Book Parking slot</h2>
                <hr />
                <form className="form-wrapper" onSubmit={this.handleFormSubmission}>
                    <div className="name">
                        <label>ParkingSlotId</label>
                        <input
                            onChange={this.handleParkingSlotId}
                            value={this.state.parkingSlotId}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking Date</label>
                        <input
                            onChange={this.handleParkingDate}
                            value={this.state.parkingDate}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking Time</label>
                        <input
                            onChange={this.handleParkingTime}
                            value={this.state.parkingTime}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking Duration</label>
                        <input
                            onChange={this.handleParkingDuration}
                            value={this.state.parkingDuration}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking FloorId</label>
                        <input
                            onChange={this.handleParkingFloorId}
                            value={this.state.parkingFloorId}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Floor Number</label>
                        <input
                            onChange={this.handleFloorNumber}
                            value={this.state.floorNumber}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>No Of Parking Slots</label>
                        <input
                            onChange={this.handleNoOfParkingSlots}
                            value={this.state.numberOfParkingSlots}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking Premise Id</label>
                        <input
                            onChange={this.handleParkingPremiseId}
                            value={this.state.parkingPremiseId}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Parking Premise Name</label>
                        <input
                            onChange={this.handleParkingPremiseName}
                            value={this.state.parkingPremiseName}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>No Of Parking Floors</label>
                        <input
                            onChange={this.handleNoOfParkingFloors}
                            value={this.state.numberOfParkingFloors}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Premise Address Id</label>
                        <input
                            onChange={this.handlePremiseAddressId}
                            value={this.state.addressId}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>City</label>
                        <input
                            onChange={this.handleCity}
                            value={this.state.city}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>State</label>
                        <input
                            onChange={this.handleState}
                            value={this.state.state}
                            className="form-control"required
                        />
                    </div>
                    <div className=" form-group">
                        <label>Pin</label>
                        <input
                            onChange={this.handlePin}
                            value={this.state.pin}
                            className="form-control"required
                        />
                    </div>
                    <button className="btn btn-primary mt-2">Submit</button>
                </form>
                {this.state.msg && (
                    <h5 className="alert alert-success mt-2">{this.state.msg}</h5>
                )}
            </div>
        );
    }
}