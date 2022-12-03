import React, { useState, useEffect } from 'react';
import MostRecent from '../components/MostRecent';
import PostContainer from '../components/PostContainer';
import { client } from '../lib/client';

const Home = ({ allPosts }) => {
  const [recentPost, setRecentPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setRecentPost(allPosts[0]);
    setPosts(allPosts.slice(1));
  }, []);

  return (
    <div>
      {recentPost && <MostRecent recentPost={recentPost} />}
      {/* {posts?.map((post) => (
        <div key={post?._id}>{post?.title}</div>
      ))} */}
      {posts && <PostContainer posts={posts} />}
    </div>
  );
};

export const getServerSideProps = async () => {
  //Fetches for all posts in publishedAt descending order
  const query = `*[_type == "post"]| order(publishedAt desc){
      _id,
      body,
      publishedAt,
      subText,
      title,
      slug,
      author->{
        _id,
        name,
      },
      mainImage{
        asset->{
          url
        }
      }
  }`;
  const allPosts = await client.fetch(query);

  return {
    props: { allPosts },
  };
};

export default Home;
