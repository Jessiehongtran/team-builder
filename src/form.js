import React, { useState } from "react";
import './App.css';

function Form() {
  const [team, setTeam] = useState([])
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTeam([...team,member])
    console.log('member in submit',member);
    
  };

  return (
    <>
    <div className="Form">
      {console.log('member',member)}
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Email:
          <input
            type="text"
            name="email"
            value={member.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <label className="label">
          Role
          <input
            type="text"
            name="role"
            value={member.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>

    <div>Member List</div>
    <div>
    {team.map(person =>( 
        
        <div key={person}>
            Name: {person.name}
            Email: {person.email}
            Role: {person.role}
        </div>
        
        // console.log('member list', person)

    ))}
    </div>
    </>
  );
}

export default Form;