import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../services/exampleService';

const ExampleComponent = () => {
  const { data, error, isLoading } = useQuery('posts', fetchPosts);

  if (isLoading)
    return <div className='flex justify-center w-full'><span className="loading loading-dots loading-lg"></span></div>;

  if (error && error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {data &&
        data.map((post: any) => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default ExampleComponent;
