import React from 'react';
import Link from 'next/link';

const PostThumbnail = ({ post }) => {
  return (
    <div>
      <Link href={`/post/${post.slug.current}`}>{post.title}</Link>
    </div>
  );
};

export default PostThumbnail;
