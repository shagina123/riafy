import React from 'react'
import Search from '../Components/Search/Search'
import Login from '../Components/Login/login'
import './SearchPage.css'
export default class SearchPage extends React.Component{
    state={
        login:"Login"
    }
    handleOpen=()=>{

    }
    render(){
        return(
            <>
            <div className="row1">
                <div className="title">STOCK</div>
                <div className="loginbtn" onClick={this.handleOpen} data-bs-toggle="modal" data-bs-target="#exampleModal">LOGIN</div>
                {/* <div className="loginbtn" onClick={this.handleOpen} >HOME</div> */}

            </div>
            <div className="caption">The easiest way to buy and sell products</div>
    
           <Login/>

            <Search/>
            </>
        )
    }
}