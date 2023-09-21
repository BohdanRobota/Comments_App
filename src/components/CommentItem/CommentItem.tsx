import React from 'react';
import styles from './CommentItem.module.css';
import { TComment } from '../../types';

type CommentItemProps = {
  comment: TComment;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className={styles.commentItemContainer}>
      <p>{comment.commentText}</p>
    </div>
  );
};

export default CommentItem;
