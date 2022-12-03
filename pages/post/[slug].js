import React from 'react';
import { client, urlFor } from '../../lib/client';

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);

  return {
    props: { post },
  };
};
