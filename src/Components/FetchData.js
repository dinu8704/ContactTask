import "./datatable.css";
import firebase from "../firebase";
import React from "react";
import Loader from "./Loader";
import swal from "sweetalert";

class FetchData extends React.Component {
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
        const data = snapshot.val();

        for(let id in data){
            CompanyList.push({
                id: id,
                Title: data[id].Title,
                FirstName: data[id].FirstName,
                LastName: data[id].LastName,
                Email: data[id].Email,
                PhoneNumber: data[id].PhoneNumber,
                BirthDate: data[id].BirthDate,
                CompanyName: data[id].CompanyName,
                BankName: data[id].BankName,
                AccountNo: data[id].AccountNo,
                IFSC: data[id].IFSC,
            });
        }

        // snapshot.forEach(snap => {
        //     CompanyList.push(snap.val());
        // });
        this.setState({ 
            CompanyList: CompanyList,
            loading:false
         });
      });
}


render(){

    const handleDelete = (id) =>{
        const firestore = firebase.database().ref("Registration").child(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              firestore.remove();
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });

    };
    
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
          <th>Status</th>
        </tr>
      </thead>
          { this.state.loading && <Loader /> }
      <tbody>
      {!this.state.loading && this.state.CompanyList.map(data => {
        
        return (
        <tr key={data.email}>
          <td>*</td>
          {console.log(data.id)}
          <td>{data.Title} {data.FirstName} {data.LastName} </td>
          <td>{data.Email}</td>
          <td>{data.PhoneNumber}</td>
          <td>{data.BirthDate}</td>
          <td>{data.CompanyName}</td>
          <td>{data.BankName}</td>
          <td>{data.AccountNo}</td>
          <td>{data.IFSC}</td>
          <td className="text-center">
            <button className="btn btn-danger ml-2" onClick={()=>{handleDelete(data.id)}}>Delete</button>
           </td>
        </tr>
        );
               
        })}
      </tbody>
    </table>
  </div>
  );
  }
}
export default FetchData;
