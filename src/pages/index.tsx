import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full">
        <motion.h1
          className="mb-5 text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Next Js + DailsUI kit
        </motion.h1>
        
          <motion.p
            className="mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Our mission is to inspire and create.
          </motion.p>
      </div>
      
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </motion.button>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome to DaisyUI!</h2>
          <p>This is boilerplate for Next with Daisy UI.</p>
        </div>
      </div>
    </div>
  );
}
