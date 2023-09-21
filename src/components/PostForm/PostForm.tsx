import React, { useState } from 'react';
import styles from './PostForm.module.css';
import { TPost } from '../../types';
import { useDispatch } from 'react-redux';
import { PostsActionCreators } from '../../store/reducers/posts/action-creators';

const PostForm = () => {
  const [postText, setPostText] = useState<string>('');
  const dispatch = useDispatch();
  const createNewPost = () => {
    if (postText.length < 1) return null;
    const newPost: TPost = { postText, id: Date.now().toString(), comments: [] };
    return newPost;
  };
  const handleAddPost = () => {
    const newPost = createNewPost();
    if (newPost !== null) {
      dispatch(PostsActionCreators.addPost(newPost));
    }
    setPostText('');
  };
  return (
    <div className={styles.postFormContainer}>
      <input
        onChange={(e) => {
          setPostText(e.currentTarget.value);
        }}
        value={postText}
        className={styles.postFormInput}
        type="text"
        placeholder="Type name here..."
      />
      <button onClick={handleAddPost} className={styles.postFormButton}>
        Add new
      </button>
    </div>
  );
};

export default PostForm;
