import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import PublishedDate from './PublishedDate';

const MostRecent = ({
  recentPost: { title, slug, mainImage, publishedAt, subText },
}) => {
  return (
    <div className="my-5">
      <h2 className="text-3xl font-display tracking-wide font-semibold my-9">
        Most Recent Post
      </h2>
      <Link
        href={`/post/${slug.current}`}
        className="grid grid-cols-12 grid-rows-[repeat(7,_40px)] gap-2"
      >
        <div className="col-start-2 col-span-5 row-start-1 row-end-[6]">
          <img
            src={urlFor(mainImage.asset.url)}
            alt="recent-post"
            className="object-cover w-full max-h-full rounded"
          />
        </div>

        <h4 className="font-display text-4xl col-start-7 col-span-3 row-span-2">
          {title}
        </h4>
        <p className="font-body row-start-3 col-span-4 text-xl">{subText}</p>
        <PublishedDate publishedAt={publishedAt} />
      </Link>
    </div>
  );
};

export default MostRecent;
