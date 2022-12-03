import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const MostRecent = ({
  recentPost: { title, slug, mainImage, publishedAt, subText },
}) => {
  return (
    <div>
      <Link href={`/post/${slug.current}`}>
        <h2 className="font-display">{title}</h2>
        <img src={urlFor(mainImage.asset.url)} alt="recent-post" width={500} />
        <p>{publishedAt}</p>
        <p className="font-body">{subText}</p>
      </Link>
    </div>
  );
};

export default MostRecent;
