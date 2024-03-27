'use client';

import React, { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';

export default function Page(){
  let [count, setCount] = useState(0);

  return (
    <div className='test w-full'>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Tests</h1>
      </div>
      <p>{count}</p>
      <button className="group relative inline-block focus:outline-none focus:ring" onClick={() => setCount(count + 1)}>
        <span
          className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        ></span>

        <span
          className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
        >
          ADD
        </span>
      </button>
      <div className='parent pt-4'>
        <div className='div1 bg-cyan-500'>1</div>
        <div className='div2 bg-gray-500'>2</div>
        <div className='div3 bg-red-500'>
          <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
            >
              Edit
            </button>
            <button
              className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
            >
              View
            </button>
            <button
              className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
            >
              Delete
            </button>
          </span>
        </div>
        <div className='div4 bg-green-400'>4</div>
      </div>
    </div>
  );
}