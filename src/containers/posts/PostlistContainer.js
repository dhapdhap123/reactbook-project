import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/postList';
import { listPosts } from '../../modules/posts';
import {
  useLocation,
  useParams,
} from '../../../node_modules/react-router-dom/dist/index';

const PostlistContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = params;
    const { tag, page } = qs.parse(location, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location, params]);
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostlistContainer;
