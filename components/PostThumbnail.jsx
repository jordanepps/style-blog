import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import PublishedDate from './PublishedDate';

const PostThumbnail = ({
  post: { title, slug, mainImage, publishedAt, subText },
}) => {
  return (
    <div className="flex max-w-[350px] max-h-[385px] mx-auto ">
      <Link
        href={`/post/${slug.current}`}
        className="rounded cursor-pointer flex flex-col hover:shadow-xl hover:scale-110 ease-in duration-100"
      >
        <div className=" max-h-[250px] ">
          <img
            src={urlFor(mainImage.asset.url)}
            alt="post"
            className=" rounded  max-h-[250px] "
          />
        </div>
        <div className=" flex flex-row gap-8 items-center p-1">
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <PublishedDate publishedAt={publishedAt} />
        </div>
        <div>
          <p className="font-body p-1">{subText}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostThumbnail;
