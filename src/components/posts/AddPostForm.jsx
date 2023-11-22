import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { postAdded } from "../../store/appSlice/postsSlice";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('0');


    const users = useSelector((state) => state.users);

    const handlerTitleChange = event => setTitle(event.target.value);
    const handlerContentChange = event => setContent(event.target.value);
    const handlerAuthorChange = event => setUserId(event.target.value);

    const onSavePost = () => {
        if (title !== '' && content !== '') {
            console.log(title, content, userId);
            const id=nanoid();
            console.log(id);
            dispatch(postAdded(title, content,userId));
        }
    }

    return (
        <form className="addPost">
            <label htmlFor="postTitle">title </label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={handlerTitleChange}
            />
            <br />
            <label htmlFor="postAuthor"> author </label>
            <select name="postAuthor" id="postAuthor" value={userId} onChange={handlerAuthorChange}>
                <option key="0" value="0"> select author </option>
                {/* <option value=""> data </option> */}
                {
                    users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))
                }
            </select>
            <br />
            <label htmlFor="postContent">content </label>

            <textarea
            
                id="postContent"
                name="postContent"
                value={content}
                onChange={handlerContentChange}
            />
            <br />

            <button className="button-17" type="button" onClick={onSavePost}>add post</button>
        </form>
    );
}


export default AddPostForm;