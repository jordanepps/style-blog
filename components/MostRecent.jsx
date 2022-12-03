import React from 'react';
import Link from 'next/link';

const MostRecent = ({ recentPost: { title, slug } }) => {
  return (
    <div>
      <Link href={`/post/${slug.current}`}>{title}</Link>
    </div>
  );
};

export default MostRecent;
