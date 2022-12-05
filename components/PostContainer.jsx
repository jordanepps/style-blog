import React from 'react';
import PostThumbnail from './PostThumbnail';

const PostContainer = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 gap-y-10 mb-14 items-center">
      {posts?.map((post, i) => (
        <PostThumbnail post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostContainer;

/* gap-x-16 gap-y-10 */
