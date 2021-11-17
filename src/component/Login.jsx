import React from "react"
import axios from "axios"

export class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            successMsg:'',
            failedMsg:'',
            loggedIn:false
        }
    }
    handleUsername=(event)=>
    {
        this.setState({
            username:event.target.value

        })

    }

    handleLogout=()=>
    {
        this.setState({loggedIn:false})
    }


   
    handlePassword=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    }
    

    handleFormSubmission=(event)=>
    {
        console.log(this.state)
        event.preventDefault()
        axios.post('http://localhost:8085/user/login',this.state)
                .then((response)=>
                {
                    console.log(response.data.msg)
                    if(response.data.msg!=="Invalid Credentials,Try again")
                    {
                    this.setState({
                        username:'',
                        password:'',
                        successMsg:"Login Successful",
                        loggedIn:true
                    })
                }
                else{
                    this.setState({
                        username:'',
                        password:'',
                        successMsg:'',
                        failedMsg:response.data.msg,
                        loggedIn:false
                    })

                }

                    
                })
                .catch(error=>{
                    console.log(error)
                    this.setState({
                        username:'',
                        password:'',
                        msg:''
                    })
                     
                })
    }

    render(){
        if(!this.state.loggedIn)
        {
            return(
                <React.Fragment>
                <div className="container mt-3">
                <h2>Login Page</h2>
                <hr/>
                <form onSubmit={this.handleFormSubmission}>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={this.handleUsername} value={this.state.username} className="form-control"required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control"required/>
                    </div>    
                    <button type="submit" className="btn btn-success mt-2">Login</button>
                </form>
                </div>
                <h5 className="text-danger">{this.state.failedMsg}</h5>
                </React.Fragment>
                
            )

        }
        else{

            return(
                <div className="container mt-2">
                    <h2 className="text-danger">{this.state.successMsg}</h2>
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
            )

        }

    }

}