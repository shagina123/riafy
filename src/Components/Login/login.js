import React from 'react'
import './login.css'
import Data from '../../data'

export default class Login extends React.Component{
    state = {
        username: "",
        password: "",
        modalflag:true
      }
      onUserNameChange = (event) => { this.setState({ username: event.target.value }) }
      onPasswordChange = (event) => { this.setState({ password: event.target.value }) }
      onSubmit = (event) => {
          let pwd=this.state.password
        let  uname=this.state.username
       
        Data.login(uname,pwd)
        .then(response=>{
             event.preventDefault();
             alert(response.data.message)
          
        })
        .catch(error => {
                
            alert(JSON.stringify(error.response.data))
            
        })
    

      }
    render(){
        return(
            <>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={this.onSubmit}>
          <h1> My Bank</h1>
          <div className="container" id="loginContainer">
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label for="uname">User Name</label>
                </div>
                <div className="col-8">
                  <input type="text" className="form-control" id="uname" placeholder="User Name" value={this.state.username} onChange={this.onUserNameChange}>
                  </input>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label for="password">Password</label>
                  </div>
                  <div className="col-8">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}>
                    </input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                      <label className="form-check-label" for="dropdownCheck">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" id="submit" className="btn btn-primary" >Sign in</button>


            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </>
        )
    }
}