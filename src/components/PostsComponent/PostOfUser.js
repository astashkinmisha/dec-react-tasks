import React from 'react';

const PostOfUser = ({post:{id,title,body}}) => {
    return (
        <div>
            <h1>{id}. {title}</h1>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostOfUser;