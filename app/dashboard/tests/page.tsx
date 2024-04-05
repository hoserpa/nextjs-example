'use client';

import React, { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { menu1 } from '@/app/dashboard/tests/menu.json';

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
        
        <div className='div2 bg-gray-500 justify-self-end'>
          <span className="inline-flex flex-col overflow-hidden rounded-md borde shadow-sm">
            {menu1?.map((item) => (
              <button
                key={item.id}
                className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 focus:relative my-2"
              >
                {item.label}
              </button>
            ))}
            <button
              className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 focus:relative my-2"
            >
              <PlusCircleIcon className="h-6 w-6 inline"/>
            </button>
          </span>
        </div>

        <div className='div3 bg-red-500 self-end'>
          <span className="inline-flex overflow-hidden rounded-md borde shadow-sm">
            {menu1?.map((item) => (
              <button
                key={item.id}
                className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 focus:relative mx-2"
              >
                {item.label}
              </button>
            ))}
            <button
              className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 focus:relative mx-2"
            >
              <PlusCircleIcon className="h-6 w-6 inline"/>
            </button>
          </span>
        </div>
        <div className='div4 bg-green-400'>4</div>
      </div>
    </div>
  );
}