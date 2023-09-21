import React, { useState } from 'react';
import styles from './CommentsForm.module.css';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostsActionCreators } from '../../store/reducers/posts/action-creators';
import { TComment } from '../../types';

const CommentsForm = () => {
  const [commentText, setCommentText] = useState<string>('');
  const activePost = useTypedSelector((state) => state.activePostReducer.post);
  const createComment = () => {
    if (commentText.length < 1) return null;
    const newComment: TComment = { id: Date.now().toString(), color: '#000', commentText };
    return newComment;
  };
  const handleAddPost = () => {
    const newComment = createComment();
    if (newComment !== null && activePost !== null) {
      dispatch(PostsActionCreators.addComment(newComment, activePost));
    }
    setCommentText('');
  };
  const dispatch = useDispatch();
  return (
    <div className={styles.commentFormContainer}>
      <input
        onChange={(e) => {
          setCommentText(e.currentTarget.value);
        }}
        value={commentText}
        className={styles.commentFormInput}
        type="text"
        placeholder="Type comment here..."
      />
      <button onClick={handleAddPost} className={styles.commentFormButton}>
        Add new
      </button>
    </div>
  );
};

export default CommentsForm;
