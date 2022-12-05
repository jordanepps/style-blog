import React from 'react';
import PostThumbnail from './PostThumbnail';

const PostContainer = ({ posts }) => {
  return (
    <div className="flex flex-row flex-wrap gap-x-12 gap-y-10 justify-center">
      {posts?.map((post, i) => (
        <PostThumbnail post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostContainer;
