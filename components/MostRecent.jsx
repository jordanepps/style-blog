import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import PublishedDate from './PublishedDate';

const MostRecent = ({
  recentPost: { title, slug, mainImage, publishedAt, subText },
}) => {
  return (
    <div className="my-5 pb-1">
      <h2 className="text-3xl font-display tracking-wide font-semibold my-9">
        Most Recent Posts
      </h2>
      <div className=" max-w-[350px] max-h-[385px] mx-auto mb-14 md:max-w-[650px]">
        <Link
          href={`/post/${slug.current}`}
          className="rounded cursor-pointer flex flex-col md:flex-row gap-5 hover:shadow-xl hover:scale-110 ease-in duration-100"
        >
          <div className="max-w-[350px] max-h-[250px]">
            <img
              src={urlFor(mainImage.asset.url)}
              alt="post"
              className="rounded max-w-[350px] max-h-[250px] h-auto w-auto"
            />
          </div>
          <div>
            <div className=" flex flex-row gap-8 items-center">
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <PublishedDate publishedAt={publishedAt} />
            </div>
            <div>
              <p className="font-body ">{subText}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MostRecent;
