import React from 'react';
import Link from 'next/link';

const PostThumbnail = ({ post }) => {
  return (
    <div>
      <Link href={`/post/${post.slug.current}`} className="cursor-pointer">
        <h3 className="font-display">{post.title}</h3>
      </Link>
    </div>
  );
};

export default PostThumbnail;
