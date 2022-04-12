import React from 'react';

const UserDetails = ({user, getPosts}) => {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div>
            <p>ID:{id}</p>
            <p>name:{name}</p>
            <p>username:{username}</p>
            <p>email:{email}</p>
            <button className={'get-posts-btn'} onClick={() => getPosts(id)}>Get Posts</button>
        </div>
    );
};

export default UserDetails;