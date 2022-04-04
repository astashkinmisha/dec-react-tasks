export default function Comment({comment}){

    let {postId,id,name,email,body} = comment;

return(
<div>
    {
        <p>{postId} {id} {name} {email} {body}</p>
    }
</div>

);
};