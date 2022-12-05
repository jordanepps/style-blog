import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import PublishedDate from './PublishedDate';

//TODO: Switch to next image

const PostThumbnail = ({
  post: { title, slug, mainImage, publishedAt, subText },
}) => {
  console.log(mainImage);
  return (
    <div className="flex w-1/4 h-96">
      <Link
        href={`/post/${slug.current}`}
        className=" cursor-pointer flex flex-col"
      >
        <div className="w-[350px] h-[250px] overflow-hidden">
          <img
            src={urlFor(mainImage.asset.url)}
            alt="post"
            className="object-cover rounded"
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
