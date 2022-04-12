import React from 'react';

const User = ({user, getUser}) => {

    const {id, email, name, username} = user;

    return (
        <div>
            {name} ->
            <button onClick={() => getUser(user)}>GetDetails</button>
        </div>
    );
};

export default User;