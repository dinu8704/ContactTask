import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
export class Navbar extends Component {

    render() {
        
        return (
            <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Registration</Link>
                    </div>
                    <ul className="nav navbar-nav">
                    <li><Link to="/"><strong>Home</strong> </Link></li>
                    <li><Link to="/FetchData">Data</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    {/* <li><Link to="/SignUP"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> */}
                    <li>
                        <button className="btn btn-dark buttonModal" data-toggle="modal" data-target="#SignUP"><span className="glyphicon glyphicon-user"></span> Sign Up</button>
                        {/* <!-- Modal --> */}
                            <div className="modal fade" id="SignUP" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Sign UP</h4>
                                        </div>
                                        <div className="modal-body ">
                                            <div className=" px-8">
                                                <form action="/">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email address:</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="pwd">Password:</label>
                                                        <input type="password1" className="form-control" id="pwd"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="pwd">Confirm Password:</label>
                                                        <input type="password2" className="form-control" id="pwd"/>
                                                    </div>
                                                    <button type="submit" className="btn btn-success" disabled={true}> Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </li>
                    <li>
                    <button className="btn btn-dark buttonModal" data-toggle="modal" data-target="#LoginModal"><span className="glyphicon glyphicon-user"></span> Login</button>
                        {/* <!-- Modal --> */}
                            <div className="modal fade" id="LoginModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Login</h4>
                                        </div>
                                        <div className="modal-body">
                                        <div className=" px-8">
                                                <form action="/">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email address:</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="pwd">Password:</label>
                                                        <input type="password1" className="form-control" id="pwd"/>
                                                    </div>
                                                    <button type="submit" className="btn btn-success" disabled={true}>Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                        <button  type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </li>
                    </ul>
                </div>
                </nav>

            </>
        )
    }
}

export default Navbar
