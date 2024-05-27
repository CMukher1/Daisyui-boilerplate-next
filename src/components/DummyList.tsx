import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../services/exampleService';
import { motion } from 'framer-motion';

const DummyListComponent = () => {
  const { data, error, isLoading } = useQuery('posts', fetchPosts);

  if (isLoading)
    return (
      <div className="flex justify-center w-full h-[40vh]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

  if (error && error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Posts</h1>
      {data &&
        data.map((post: any) => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            <motion.h2
              className="text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {post.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {post.body}
            </motion.p>
          </div>
        ))}
    </div>
  );
};

export default DummyListComponent;
