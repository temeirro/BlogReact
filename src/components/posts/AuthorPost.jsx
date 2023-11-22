import { useSelector } from "react-redux";

const AuthorPost=({userId})=>{
    const users=useSelector((store)=>store.users);
    const author=users.find(user=>user.id===userId);
    return (
        <span> Author: {author ? author.name : "Unknown author"}</span>
    )

}


export default AuthorPost;