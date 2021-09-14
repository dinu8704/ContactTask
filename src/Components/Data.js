import firebase from "../firebase";
import React from 'react';
import "./datatable.css";
import Loader from "./Loader";
class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CompanyList : [],
            loading: false
        }
    }

componentDidMount() {
    this.setState({loading: true});
    firebase.database().ref("Registration").on("value", snapshot => {
        let CompanyList = [];
        snapshot.forEach(snap => {
            CompanyList.push(snap.val());
        });
        this.setState({ 
            CompanyList: CompanyList,
            loading:false
         });
      });
}
render(){
  return (
      <div className="center tablebase">
          <div className="jumbotron text-center bg-sky">
          <h3>Firebase Data Fetching </h3>
        </div>
     
    <table >
      <thead>
        <tr>
          <th>#</th>
          <th>Full name</th>
          <th>EmailID</th>
          <th>Phone</th>
          <th>Birth</th>
          <th>Company</th>
          <th>Bank Name</th>
          <th>Account No.</th>
          <th>IFSC Code</th>
        </tr>
      </thead>
          {/* {  <Loader /> } */}
          { this.state.loading && <Loader /> }
      <tbody>
      {/* { this.state.CompanyList.map(data => { */}
      {!this.state.loading && this.state.CompanyList.map(data => {
        
        return (
        <tr key={data.email}>
          <td>*</td>
          <td>{data.Title} {data.FirstName} {data.LastName} </td>
          <td>{data.Email}</td>
          <td>{data.PhoneNumber}</td>
          <td>{data.BirthDate}</td>
          <td>{data.CompanyName}</td>
          <td>{data.BankName}</td>
          <td>{data.AccountNo}</td>
          <td>{data.IFSC}</td>
        </tr>
        );
               
        })}
      </tbody>
    </table>
  </div>
  );
  }
}
export default Data;
