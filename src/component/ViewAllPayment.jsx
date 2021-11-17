import axios from 'axios'
    import React , {useState,useEffect} from 'react'
    
    export function ViewAllPayment(){
    
        const[paymentId,setPaymentId]=useState()
        const[payment,setPayment]=useState({})
        const[idFromBtn,setIdFromBtn]=useState()
    
        useEffect(()=>
        {
            axios.get(`http://localhost:8085/Payment/findbyid/${paymentId}`)
            .then(response=>
                {
                    console.log(response.data)
                    setPayment(response.data)
                })
                .catch(error=>console.log(error))
        }, [idFromBtn]
        )
    
        return(
            <div className="container">
                <h3>Get Payment</h3>
                <hr/>
                <div className="form-group">
                    <label>Payment ID</label>
                    <input value={paymentId} onChange={(event)=>setPaymentId(event.target.value)} className="form-control"required/>
    
                </div>
                <button onClick={ ()=>setIdFromBtn(paymentId)} className="btn btn-primary m-2">Search</button>
                <hr/>
                {
                    payment && <div>
                        <h3>Payment ID: {paymentId} Details</h3>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">AmountPaid: {payment.amountPaid}</li>
                            <li className="list-group-item list-group-item-success">paymentDateTime : {payment.paymentDateTime}</li>
                            <li className="list-group-item list-group-item-success">Status: {payment.status}</li>
                           <li className="list-group-item list-group-item-success">Type: {payment.type}</li>
                        </ul>
                        </div>
                }
            </div>
        )
    }