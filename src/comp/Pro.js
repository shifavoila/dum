import React from 'react'

const Pro = (props) => {
    const users = props.users.filter(user => user.isActive);

  return (
    <ul>
        {
            users.map((i, index) => (
                <h1 key={index}>{index}. {i.name}</h1>
            ))
        }
    </ul>
  )
}

export default Pro;