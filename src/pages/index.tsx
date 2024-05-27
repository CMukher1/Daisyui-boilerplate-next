import React from 'react';
import DummyListComponent from '../components/DummyList';

export default function Home() {
  return (
    <div className="p-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome to DaisyUI!</h2>
          <p>This is boilerplate for Next with Daisy UI.</p>
          
        </div>
      </div>
      <div className='p-5'>
        <DummyListComponent />
      </div>
    </div>
  );
}
