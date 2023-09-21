import React from 'react';
import styles from './PostContainer.module.css';
import PostForm from '../PostForm/PostForm';
import List from '../List';
import PostItem from '../PostItem/PostItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TPost } from '../../types';

const PostContainer = () => {
  const { posts } = useTypedSelector((state) => state.postsReducer);
  return (
    <div className={styles.postContainer}>
      <h1>Posts</h1>
      <PostForm />
      {posts.length > 0 && <List items={posts} renderItem={(post: TPost) => <PostItem key={post.id} post={post} />} />}
    </div>
  );
};

export default PostContainer;
