import React from 'react';
import styles from './PostItem.module.css';
import { TPost } from '../../types';
import { useDispatch } from 'react-redux';
import { PostsActionCreators } from '../../store/reducers/posts/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ActivePostActionCreators } from '../../store/reducers/activePost/action-creators';

type PostItemProps = {
  post: TPost;
};

const PostItem = ({ post }: PostItemProps) => {
  const activePost = useTypedSelector((state) => state.activePostReducer.post);
  const dispatch = useDispatch();
  let activeClass = '';
  if (activePost?.id === post.id) {
    activeClass = styles.activePost;
  }
  const handleDeletePost = () => {
    dispatch(PostsActionCreators.deletePost(post));
  };
  const handleSetActivePost = () => {
    dispatch(ActivePostActionCreators.setActivePost(post));
  };
  return (
    <div onClick={handleSetActivePost} className={`${styles.postItemContainer} ${activeClass}`}>
      <p className={styles.postItemText}>{post.postText}</p>
      <div className={styles.postItemCount}>{post.comments.length}</div>
      <button onClick={handleDeletePost} className={styles.postItemButton}>
        Delete
      </button>
    </div>
  );
};

export default PostItem;
