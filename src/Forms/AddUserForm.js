import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      class="new"
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name: </label>
      <input
        type="text"
        class="formtext"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br />
      <label>Username: </label>
      <input
        type="text"
        name="username"
        class="formtext"
        value={user.username}
        onChange={handleInputChange}
      />
      <br />
      <button class="smit01">Add new user</button>
    </form>
  );
};

export default AddUserForm;
