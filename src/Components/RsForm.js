import React, { Component } from "react";
import '../App.css';
import firebase from "../firebase";
import swal from "sweetalert";

export class RsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let sendFormData = "";
    console.log(sendFormData);
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //title
    if (!fields["title"]) {
        formIsValid = false;
        errors["title"] = "required*";
      }
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "This field is required*";
    }
    //lastname
    if (!fields["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "This field is required*";
      }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "This field is required*";
    }
    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //phone
    if (!fields["phone"]) {
        formIsValid = false;
        errors["phone"] = "This field is required*";
      }
    //birth
    if (!fields["birth"]) {
        formIsValid = false;
        errors["birth"] = "This field is required*";
      }
    //company
    if (!fields["company"]) {
        formIsValid = false;
        errors["company"] = "This field is required*";
      }
    //bankname
    if (!fields["bankname"]) {
        formIsValid = false;
        errors["bankname"] = "This field is required*";
      }
    //account
    if (!fields["account"]) {
        formIsValid = false;
        errors["account"] = "This field is required*";
      }
      //ifsc
    if (!fields["ifsc"]) {
        formIsValid = false;
        errors["ifsc"] = "This field is required*";
      }
    

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const title = this.state.fields["title"];
      const name = this.state.fields["name"];
      const lastname = this.state.fields["lastname"];
      const email = this.state.fields["email"];
      const phone = this.state.fields["phone"];
      const birth = this.state.fields["birth"];
      const company = this.state.fields["company"];
      const bankname = this.state.fields["bankname"];
      const account = this.state.fields["account"];
      const ifsc = this.state.fields["ifsc"];
      console.log(title + name + lastname + email + phone + birth + company + bankname + account + ifsc);

      const firestore = firebase.database().ref("/Registration");
                console.log(firestore);
                let data = {
                    Title: title,
                    FirstName: name,
                    LastName: lastname,
                    Email: email,
                    PhoneNumber: phone,
                    BirthDate: birth,
                    CompanyName: company,
                    BankName: bankname,
                    AccountNo: account,
                    IFSC: ifsc
                };
                if(data){
                    swal("Submited!", "Succssfully Send Thank you " + title + " "  + name + " "  + lastname , "success");
                    e.target.reset();
                }else{
                    swal("Oops!", "Something went wrong!", "error");
                }
                firestore.push(data);
      // alert("Form submitted");
    } else {
      alert("!Ooops... You not fill any input field");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className="topmin">
        <div className="Box-shadow-mannual">
          <form
            onSubmit={this.contactSubmit.bind(this)}
            name="contactform"
            className="contactform"
          >
            <div className="topinput">
              <h3>
                <strong className="titlename">General Information</strong>
              </h3>
              <div className="row">
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <select
                      // ref="title"
                      className="form-control"
                      onChange={this.handleChange.bind(this, "title")}
                      value={this.state.fields["title"]}
                    >
                      <option defaultValue>Title</option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                    </select>
                    <small className="Error-class text-danger">
                      {this.state.errors["title"]}
                    </small>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      ref="name"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      onChange={this.handleChange.bind(this, "name")}
                      value={this.state.fields["name"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["name"]}
                    </small>
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      ref="lastname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={this.handleChange.bind(this, "lastname")}
                      value={this.state.fields["lastname"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["lastname"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div ref="email" className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      onChange={this.handleChange.bind(this, "email")}
                      value={this.state.fields["email"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["email"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      ref="phone"
                      type="text"
                      maxlength="10"
                      className="form-control"
                      placeholder="Your Phone No."
                      onChange={this.handleChange.bind(this, "phone")}
                      value={this.state.fields["phone"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["phone"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      ref="birth"
                      type="text"
                      className="form-control"
                      placeholder="Date of Birth"
                      onChange={this.handleChange.bind(this, "birth")}
                      value={this.state.fields["birth"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["birth"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      ref="company"
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      onChange={this.handleChange.bind(this, "company")}
                      value={this.state.fields["company"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["company"]}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="purples-sec">
              <div className="row">
                <h3>
                  <span className="text-light bottom-title">
                    Bank Information
                  </span>
                </h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      ref="bankname"
                      type="text"
                      className="form-control"
                      placeholder="Bank Name"
                      onChange={this.handleChange.bind(this, "bankname")}
                      value={this.state.fields["bankname"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["bankname"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      ref="account"
                      type="number"
                      className="form-control"
                      placeholder="Account Number"
                      onChange={this.handleChange.bind(this, "account")}
                      value={this.state.fields["account"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["account"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      ref="ifsc"
                      type="text"
                      className="form-control"
                      placeholder="IFSC Code"
                      onChange={this.handleChange.bind(this, "ifsc")}
                      value={this.state.fields["ifsc"]}
                    />
                    <small className="Error-class">
                      {this.state.errors["ifsc"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6"></div>
                </div>
              </div>
              <div className="submit-btn-manual my-4 " id="breakline">
                <button type="submit" className="submit-btn-change btn">
                  Register User
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* 
                       <form name="contactform" className="contactform" >
                        <div className="col-md-6">
                          <fieldset>
                               <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                               <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                              <br/>
                             <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                             <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                             <br/>
                             <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                             <br/>
                             <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                             <br/>
                         </fieldset>
                      </div>
          
                  </form> */}
      </div>
    );
  }
}

export default RsForm;
