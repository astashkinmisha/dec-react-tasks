import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import User from "./User";
import UserDetails from "./UserDetails";
import PostsOfUser from "../PostsComponent/PostsOfUser";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    const getPosts = (id) => {
        usersService.getPostsOfUser(id).then(({data}) => setPosts(data))
    }

    useEffect(() => {
        usersService.getUsers().then(({data}) => setUsers(data))
    },[]);

    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getUser={setUser}/>)}
            </div>
            {user && <UserDetails user={user} getPosts={getPosts}/>}
            {posts && <PostsOfUser posts={posts}/>}
        </div>
    );
};

export default Users;