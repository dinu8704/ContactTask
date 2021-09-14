import React, { Component } from 'react'
import loading from "./loading.gif"

export class Loader extends Component {
    render() {
        return (
            <div className="text-center" style={{position: "absolute", left: "50%"}}>
                <img src={loading} alt="Loading" style={{height: "40px"}} />
            </div>
        )
    }
}

export default Loader
