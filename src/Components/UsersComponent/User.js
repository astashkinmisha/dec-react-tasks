export default function User({user}) {
    let {id,name,username,email} = user;

    return(
        <div>
            {
               <p>id-  {id} - {email}
               name- {name} username- {username} </p>
            }
        </div>
    )
}