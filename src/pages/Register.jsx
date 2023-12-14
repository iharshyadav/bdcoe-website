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
              type="text"
              name=""
              required=""
              placeholder="College Email"
            />
            <label className="usernamesize">College Email</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="Branch"
            />
            <label className="usernamesize">Branch</label>
          </div>

          <div className="user-box2">
          <select
              className="custom-dropdown"
              value={selectOption}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              
            </select>
            <label className="usernamesize">Section</label>
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

          <div className="user-box">
            <input
              type="number"
              name=""
              required=""
              placeholder="Student No."
            />
            <label className="usernamesize">Student No.</label>
          </div>

          <div className="user-box2">
            <select
              className="custom-dropdown"
              value={selectOption}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              <option value="hostel">Hostel</option>
              <option value="dayscholar">Dayscholar</option>
            </select>
            <label className="usernamesize">Residency</label>
          </div>

          <button className="submitbtn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
