import React, {  useState } from "react";
import firebase from "../firebase";
import swal from "sweetalert";



const Registration = () => {
    
            var errors = {};
            const [title, setTitle] = useState("");
            const [name, setName] = useState("");
            const [lastname, setLastName] = useState("");
            const [email, setEmail] = useState("");
            const [phone, setPhone] = useState("");
            const [birth, setBirth] = useState("");
            const [company, setCompany] = useState("");
            const [bankname, setBankName] = useState("");
            const [account, setAccount] = useState("");
            const [ifsc, setIfsc] = useState("");
            
            const [errormessage, setErrorMessage] = useState("");

           

          const handleAddUser = (e) => {
            e.preventDefault();
            if(title === '' || name === '' || email === '' || phone === '' || birth === '' || company === '' || bankname === '' || account === '' || ifsc === ''){
                if(title === ''){
                  alert("You not fill Company name...!");
                  setErrorMessage["title"]  = "required*";
                }
                if(name === ''){
                    errors["name"] = "This field is required*";
                }
                if(lastname === ''){
                    errors["lastname"] = "This field is required*";
                }
                if(email === ''){
                    errors["email"] = "This field is required*";
                }
                if(phone === ''){
                    errors["phone"] = "This field is required*";
                }
                if(birth === ''){
                    errors["birth"] = "This field is required*";
                }
                if(company === ''){
                    errors["company"] = "This field is required*";
                }
                if(bankname === ''){
                    errors["bankname"] = "This field is required*";
                }
                if(account === ''){
                    errors["account"] = "This field is required*";
                }
                if(ifsc === ''){
                    errors["ifsc"] = "This field is required*";
                }

            }     
            else{
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
                    swal("Sumited!", "Succssfully Send Thank you "  + name + lastname , "success");
                    e.target.reset();
                }else{
                    swal("Oops!", "Something went wrong!", "error");
                }
                firestore.push(data);
                setTitle("");
                setName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setBirth("");
                setCompany("");
                setBankName("");
                setAccount("");
                setIfsc("");
                };
              }
    return (
      <div>
        <div className="Box-shadow-mannual">
          <form
            onSubmit={handleAddUser}
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
                      name="title"
                      className="form-control"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    >
                      <option defaultValue>Title</option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                    </select>
                    <small className="Error-class text-danger">
                      {errormessage}
                    </small>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      onChange={(e) => setName(e.target.value)}
                       value={name}
                    />
                    <small className="Error-class">
                      {errors["name"]}
                    </small>
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      name="lastname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                       value={lastname}
                    />
                    <small className="Error-class">
                      {errors["lastname"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div name="email" className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                       value={email}
                    />
                    <small className="Error-class">
                      {errors["email"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone No."
                      onChange={(e) => setPhone(e.target.value)}
                       value={phone}
                    />
                    <small className="Error-class">
                      {errors["phone"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      name="birth"
                      type="number"
                      className="form-control"
                      placeholder="Date of Birth"
                      onChange={(e) => setBirth(e.target.value)}
                       value={birth}
                    />
                    <small className="Error-class">
                      {errors["birth"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      name="company"
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      onChange={(e) => setCompany(e.target.value)}
                       value={company}
                    />
                    <small className="Error-class">
                      {errors["company"]}
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
                      name="bankname"
                      type="text"
                      className="form-control"
                      placeholder="Bank Name"
                      onChange={(e) => setBankName(e.target.value)}
                       value={bankname}
                    />
                    <small className="Error-class">
                      {errors["bankname"]}
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      name="account"
                      type="number"
                      className="form-control"
                      placeholder="Account Number"
                      onChange={(e) => setAccount(e.target.value)}
                      value={account}
                    />
                    <small className="Error-class">
                      {errors["account"]}
                    </small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      name="ifsc"
                      type="text"
                      className="form-control"
                      placeholder="IFSC Code"
                      onChange={(e) => setIfsc(e.target.value)}
                       value={ifsc}
                    />
                    <small className="Error-class">
                      {errors["ifsc"]}
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
      </div>
    );
}

export default Registration;
