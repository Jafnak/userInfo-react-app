import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {

const [data,setData]=useState(
    {
        "email":"",
        "first_name":"",
        "last_name":""
    }
)

const inputHandler=(event)=>
    {
        setData({...data,[event.target.name]:event.target.value})
    }

const readValue=()=>
    {
        console.log(data)
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">FName</label>
                    <input type="text" className="form-control" name="first_name" value={data.first_name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">LName</label>
                <input type="text" className="form-control"name="last_name" value={data.first_name} onChange={inputHandler} />
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add