import React from 'react'
import './Search.css'
import icon from '../../Assets/search.svg'
import Data from '../../data'
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
                alert(error.message)
            })

    }
    handleQuery = (e) => {

    
        this.setState({ query: this.state.query })

        this.setState({ flag: false })
        var key = (this.state.query)
        Data.search(key)


            .then(response => {
                this.setState({ data: (response.data.data) })
                this.setState({ x: true })


         
        })
        .catch(error => {
                // alert("efre")
            alert(JSON.stringify(error.response.data))
            
        })

    }

    render() {

        return (
            <div className="searchhome">
                <div className='search' style={{ position: 'relative' }}>
                    <div className='searchdiv'>
                        <input type='text' className='customizeSearch' onChange={this.handleSearch} value={this.state.query} placeholder='Search Products, Brands'></input>
                        <div onClick={this.handleQuery} className='icon'><img src={icon} alt="search" ></img></div>
                    </div>

                    <div >

                        {(this.state.query !== undefined || this.state.query !== '') && this.state.flag ? <div className="select">
                            {

                                this.state.names.map(n => {
                                    return (<div style={{ padding: '12px', listStyleType: 'none', borderBottom: '1px solid #e0e0e0', width: '100%' }} onClick={this.handleQuery} value={this.state.query}>{n.name}jjjjj</div>)
                                })
                            }

                        </div> : console.log(this.state.query + 'null')
                        }

                    </div>
                    {this.state.x === true && <div className='tablediv table-responsive'>

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
                        </table></div>}
                </div>
            </div>
        )
    }
}