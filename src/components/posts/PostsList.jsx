import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";
import ReactionButton from "./ReactionButton";
import { postRemove, postEdit } from "../../store/appSlice/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);
  const [editingPost, setEditingPost] = useState(null);

  const handleEditClick = (post) => {
    setEditingPost(post);
  };

  const handleEditSubmit = (editedPost) => {
    dispatch(postEdit(editedPost));
    setEditingPost(null);
  };

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p> {post.content}</p>
          <p> <AuthorPost userId={post.userId}/> </p>
          <ReactionButton post={post} />
          <div className="postBtns">

            <button className="button-17" onClick={() => dispatch(postRemove(post.id))}>delete</button>
            <button className="button-17" onClick={() => handleEditClick(post)}>edit</button>

          </div>
          {editingPost && editingPost.id === post.id && (
            <EditForm post={editingPost} onSubmit={handleEditSubmit} />
          )}
        </div>
      ))}
    </section>
  );
};

const EditForm = ({ post, onSubmit }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const users = useSelector((state) => state.users);
  const [editedAuthor, setEditedAuthor] = useState(post.userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...post,
      title: editedTitle,
      content: editedContent,
      userId: editedAuthor
    });
  };

  return (
    <form className="editForm" onSubmit={handleSubmit}>

        <p>title</p>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />

      <p>content</p>
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />

        <label htmlFor="postAuthor"> author </label>
                    <select name="postAuthor" id="postAuthor" value={editedAuthor} onChange={(e) => setEditedAuthor(e.target.value)}>
                        <option key="0" value="0"> select author </option>
                        {/* <option value=""> data </option> */}
                        {                        

                            users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>

      <button className="button-17" type="submit">save</button>
    </form>
  );
};

export default PostsList;
