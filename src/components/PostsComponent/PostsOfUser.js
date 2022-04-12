import React from 'react';

import PostOfUser from "./PostOfUser";

const PostsOfUser = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostOfUser key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsOfUser;