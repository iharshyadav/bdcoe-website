import React, { useState } from 'react';
import "./Register.css";

const Register = () => {
  const [selectOption, setSelectOption] = useState("option1"); // Default value for the dropdown

  const handleOptionChange = (option) => {
    setSelectOption(option);
  };

  return (
    <>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="Name"
            />
            <label className="usernamesize">Name</label>
          </div>
          <div className="user-box">
            <input
              type="number"
              name=""
              required=""
              placeholder="Student No."
            />
            <label className="usernamesize">Student No.</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="College Email"
            />
            <label className="usernamesize">College Email</label>
          </div>
          <div className='side1 '>
          <div className="user-box2">
          <select
              className="custom-dropdown"
              value={selectOption}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              <option value="option1">CSE</option>
              <option value="option2">CS</option>
              <option value="option3">CSE-AIML</option>
              <option value="option4">CSE-DS</option>
              <option value="option5">IT</option>
              <option value="option6">CSIT</option>
              <option value="option7">AIML</option>
              <option value="option8">CSE-HINDI</option>
              <option value="option9">ECE</option>
              <option value="option10">EN</option>
              <option value="option11">ME</option>
              <option value="option11">CE</option>
              
            </select>
            <label className="usernamesize">Branch</label>
          </div>
          <div className="user-box2">
          <select
              className="custom-dropdown"
              // value={selectOption}
              // onChange={(e) => handleOptionChange(e.target.value)}
            >
              <option value="option1">MALE</option>
              <option value="option2">FEMALE</option>
              <option value="option3">Others</option>
              
            </select>
            <label className="usernamesize">Gender</label>
          </div>
        </div>
  

         <div className='side2'>

          <div className="user-box">
          <input
              type="number"
              name=""
              required=""
              placeholder="Section Number"
              />
            <label className="usernamesize">Section</label>
          </div>
          
          <div className="user-box2">
            <select
              className="custom-dropdown"
              value={selectOption}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              <option value="hostel">Hostel</option>
              <option value="dayscholar">Dayscholar</option>
              <option value="dayscholar">Dayscholar-pg/flat</option>
            </select>
            <label className="usernamesize">Residency</label>
          </div>

          </div>

          <div className="user-box">
            <input
              type="number"
              name=""
              required=""
              placeholder="Mobile No."
            />
            <label className="usernamesize">Mobile No.</label>
          </div>



          <button className="submitbtn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
