import React from 'react';
import PostThumbnail from './PostThumbnail';

const PostContainer = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <PostThumbnail post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostContainer;
