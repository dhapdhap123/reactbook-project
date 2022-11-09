import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationCotainer from '../containers/posts/PaginationCotainer';
import PostlistContainer from '../containers/posts/PostlistContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostlistContainer />
      <PaginationCotainer />
    </>
  );
};

export default PostListPage;
