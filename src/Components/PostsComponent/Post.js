export default function Post({post}){
    let {id, userId, title,body} = post;

return(
<div>
    {
        <p>{id} {userId} {title} {body}</p>
    }
</div>

);
};