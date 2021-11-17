import Menu from "./component/Menu";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "./component/Home";
import { BookParkingSlot } from "./component/BookParkingSlot";
import { GetSlotById } from "./component/GetSlotById";
import { DisplayAllParkingSlots } from "./component/DisplayAllParkingSlots";
import { CancelSlot } from "./component/CancelSlot";
import {User} from "./component/User";
import {Login} from "./component/Login";
import {AddPayment} from "./component/AddPayment";
import {ViewAllPayment} from "./component/ViewAllPayment";
import {AddVehicle} from "./component/AddVehicle";
import { ViewAllVehicle } from "./component/ViewAllVehicle";
import { ViewVehicleByVehicleNumber } from "./component/ViewVehicleByVehicleNumber";
import Admin from "./component/Admin";
import { Login1 } from "./component/Login1";


function App(){
  return(
    <div>
      <Router>
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Book-Parking-Slot" component={BookParkingSlot}/>
      <Route exact path="/Cancel-slot" component={CancelSlot}/>
      <Route exact path="/Get-Slot-By-Id" component={GetSlotById}/>
      <Route exact path="/Display-All-Parking-Slots" component={DisplayAllParkingSlots}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/addPayment" component={AddPayment}/>
      <Route exact path="/viewAllPayment" component={ViewAllPayment}/>
      <Route exact path="/addVehicle"component={AddVehicle}/>
      <Route exact path="/viewAllVehicle"component={ViewAllVehicle}/>
      <Route exact path="/viewVehicleByVehicleNumber"component={ViewVehicleByVehicleNumber}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/login1" component={Login1}/>
        </Router>
    </div>
  );
}

export default App;