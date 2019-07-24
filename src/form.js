import React, { useState } from "react";


function Form() {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name);
    console.log(member.password);
  };

  return (
    <div>
      {console.log(member)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={member.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
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
  );
}

export default Form;