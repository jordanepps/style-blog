import React from 'react';

const HeroBanner = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-[repeat(11,_40px)] gap-2 mt-5">
      <div className="col-start-1 col-span-5 row-start-3 ">
        <h1 className="text-6xl font-display tracking-widest font-semibold leading-tight">
          Where Creativity Meets Fashion?
        </h1>
        <h3 className="text-2xl font-light mt-12 pr-1 leading-snug">
          Is this a blog? I guess so. This text is really only here to fill out
          space. Here’s some more text. How does it look so far?
        </h3>
      </div>
      <div className="rounded col-end-13 col-span-7 bg-slate-500 row-span-3"></div>
      <div className="rounded bg-slate-500 col-start-7 col-span-2 row-span-4"></div>
      <div className="rounded bg-slate-500 col-start-9 col-span-2 row-span-4"></div>
      <div className="rounded bg-slate-500 col-start-11 col-span-2 row-start-4 row-end-[11]"></div>
      <div className="rounded bg-slate-500 col-start-6 col-span-5 row-start-[8] row-span-3"></div>
    </div>
  );
};

export default HeroBanner;
