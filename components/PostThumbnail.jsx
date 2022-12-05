import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import PublishedDate from './PublishedDate';

const PostThumbnail = ({
  post: { title, slug, mainImage, publishedAt, subText },
}) => {
  return (
    <div className="flex max-w-[350px] max-h-[384px] mx-auto ">
      <Link
        href={`/post/${slug.current}`}
        className=" cursor-pointer flex flex-col"
      >
        <div className="max-w-[350px] max-h-[250px] ">
          <img
            src={urlFor(mainImage.asset.url)}
            alt="post"
            className=" rounded max-w-[350px] max-h-[250px] "
          />
        </div>
        <div className=" flex flex-row gap-8 items-center">
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <PublishedDate publishedAt={publishedAt} />
        </div>
        <div>
          <p className="font-body ">{subText}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostThumbnail;
