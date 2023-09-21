import React, { FC } from 'react';
import PostContainer from '../components/PostContainer/PostContainer';
import CommentsContainer from '../components/CommentsContainer/CommentsContainer';

const MainPage: FC = () => {
  return (
    <div>
      <PostContainer />
      <CommentsContainer />
    </div>
  );
};

export default MainPage;
