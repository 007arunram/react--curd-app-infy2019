import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form class="new"
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name: </label>
      <input type="text" name="name" class="formtext" value={user.name} onChange={handleInputChange} />
      <br/>
      <label>Username: </label>
      <input type="text" name="username" class="formtext" value={user.username} onChange={handleInputChange} />
      <br/>
      <button class="smit01">Update user</button>
      <button  onClick={() => props.setEditing(false)} className="smit01">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
