import React from 'react';
import styles from './CommentsContainer.module.css';
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentItem from '../CommentItem/CommentItem';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import List from '../List';
import { TComment } from '../../types';

const CommentsContainer = () => {
  const activePost = useTypedSelector((state) => state.activePostReducer.post);
  return (
    <div className={styles.commentsContainer}>
      <h1>Comments</h1>
      {activePost && (
        <List
          items={activePost.comments}
          renderItem={(comment: TComment) => <CommentItem key={comment.id} comment={comment} />}
        />
      )}
      <CommentsForm />
    </div>
  );
};

export default CommentsContainer;
