import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {

    const [udata, setData] = useState(
        {
            "data":[]
        }
    )
    const fetchData=(event)=>
        {
            axios.get("https://reqres.in/api/users?page=1").then(
                (response)=>setData(response.data)
            ).catch().finally()
        }
    useEffect(()=>{fetchData()},[])
    return (
        <div>

            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {udata.data.map(
                                (udata, value) => {

                                   return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card" >
                                        <img src="..." class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Sometle and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
    
                                </div>

                                }
                            )}
                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View