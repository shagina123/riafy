import React from 'react'
import './Search.css'
import icon from '../../Assets/search.svg'
import Data from '../../data'
import swal from 'sweetalert'
export default class Search extends React.Component {
    state = {
        query: "",
        flag: false,
        data: [],
        names: [],
        x: false
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.setState({ query: e.target.value })
        this.setState({ flag: true })
        
        Data.getNames(e.target.value)
            .then(response => {
                this.setState({ names: (response.data.data) })

            }
            )
            .catch(error => {
                if (JSON.stringify(error.response.data))
                    swal("ERROR!", JSON.stringify(error.response.data), "warning")
                else
                    swal("ERROR!", JSON.stringify(error.message), "warning")
            })

    }
    handleQuery = (e) => {
        this.setState({ query: e.target.value })
        this.setState({ flag: false })
        var key = (this.state.query)
        Data.search(key)
        

            .then(response => {
                this.setState({ data: (response.data.data) })
                this.setState({ x: true })



            })
            .catch(error => {
                if (JSON.stringify(error.response.data))
                    swal("ERROR!", JSON.stringify(error.response.data), "warning")
                else
                    swal("ERROR!", JSON.stringify(error.message), "warning")

            })

    }
    handleQuery2 = (e) => {

         this.setState({ query: e.target.value })
        this.setState({ flag: false })
        var key = (e.target.value)
        Data.search(key)
        

            .then(response => {
                this.setState({ data: (response.data.data) })
                this.setState({ x: true })



            })
            .catch(error => {
                if (JSON.stringify(error.response.data))
                    swal("ERROR!", JSON.stringify(error.response.data), "warning")
                else
                    swal("ERROR!", JSON.stringify(error.message), "warning")

            })

    }

    render() {

        return (
            <div className="searchhome">
                <div className='search' style={{ position: 'relative' }}>
                    <div className='searchdiv'>
                        <input type='text' className='customizeSearch' onChange={this.handleSearch} value={this.state.query} placeholder='Search'></input>
                        <div onClick={this.handleQuery} className='icon' ><img src={icon} alt="search" ></img></div>
                    </div>

                    <div >

                        {(this.state.query !== undefined || this.state.query !== '') && this.state.flag ? <div className="select" >
                            {
                               
                                this.state.names.map(n => {
                                    return (<div><button className="listbtn" onClick={this.handleQuery2} value={n.name} >{n.name}</button></div>)
                                })
                                
                            }

                        </div> : console.log(this.state.query + 'null')
                        }

                    </div>
                    {this.state.x === true && <div className='tablediv table-responsive'>
                        {this.state.data.length > 1 &&
                            <table className="table  table-striped ">
                                <thead className="thead">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Market cap</th>
                                        <th scope="col">Current Market Price</th>
                                        <th scope="col">Stock P/E</th>
                                        <th scope="col">Divident Yield</th>
                                        <th scope="col">ROCE%</th>
                                        <th scope="col">RESERVES</th>
                                        <th scope="col">DEBT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(item => {
                                        return (<tr><td>{item.name}</td><td>{item.mcap}</td><td>{item.cmprice}</td><td>{item.stockpe}</td>
                                            <td>{item.dyield}</td><td>{item.roce}</td><td>{item.reservs}</td><td>{item.debt}</td></tr>)
                                    })}</tbody>
                            </table>}

                        {this.state.data.length === 1 &&
                            this.state.data.map(item => {
                                return (
                                    <div  className="single">
                                        <div className='r0'>  {item.name}</div>
                                        <div className="r1">
                                            <div><label> Market Cap  <span>{item.mcap}</span></label></div>
                                            <div><label> Divident Yield  <span>{item.dyield}</span></label></div>
                                            <div><label> Debt to equity  <span>{item.dte}</span></label></div>
                                        </div>
                                        <div className="r2">
                                            <div><label> Current price  <span>{item.cmprice}</span></label></div>
                                            <div><label> ROCE <span>{item.roce}</span></label></div>
                                            <div><label> Eps  <span>{item.eps}</span></label></div>
                                        </div>
                                        <div className="r1">
                                            <div><label> Stock P/E  <span>{item.stockpe}</span></label></div>
                                            <div><label> ROE  <span>{item.roe}</span></label></div>
                                            <div><label> Reserves  <span>{item.reservs}</span></label></div>
                                        </div>
                                        <div className="r2"> <div><label> Debt  <span>{item.debt}</span></label></div>

                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>}
                </div>
            </div>
        )
    }
}