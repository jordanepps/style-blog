import React from 'react';
import PostThumbnail from './PostThumbnail';

const PostContainer = ({ posts }) => {
  return (
    <div className=" flex flex-wrap gap-y-14 mx-14 items-center">
      {posts?.map((post, i) => (
        <PostThumbnail post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostContainer;

/* gap-x-16 gap-y-10 */
