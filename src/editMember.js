import React, { useState } from "react";
import './App.css';

function editMember(props) {
  console.log('prop', props)
  const [team, setTeam] = useState([])
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  const [editing, setEditing] = useState(false)

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleEdit = e => {
      setEditing(!editing)
  }

  const handleUpdate = event => {
    event.preventDefault();
    setTeam([...team.map(member => {
        if (member.id === event.id){
            return event;
        }
        return member;
    })])
    setEditing(false)

    console.log('member in edit',member);
  };

  console.log('edit', editing)

  return editing? (
    <>
    <div className="Form">
      {console.log('member',member)}
      <form onSubmit={handleUpdate}>
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
    </>
    ):(
    <>
    <div>Member List</div>
    <div>
    {team.map(person =>( 
        <div>
        <div key={person}>
            Name: {person.name}
            Email: {person.email}
            Role: {person.role}
        </div>
        <button onClick={handleEdit}>Edit</button> 
        // console.log('member list', person)
        </div>

    ))}
    </div>
    </>
    );

}

export default editMember;