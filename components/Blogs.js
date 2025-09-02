import React from 'react';
import Image from 'next/image';

const Blogs = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
          <h3 className="text-4xl font-bold leading-snug">Doing NOTHING is sometimes EVERYTHING.</h3>
          <p className="mt-4 text-gray-400">Explore insightful articles and stories from our community of thinkers and doers.</p>
          <button className="mt-8 px-8 py-3 border border-ted-red text-red-500 font-semibold rounded-full hover:bg-ted-red hover:text-white transition-colors">
            Read Blogs
          </button>
        </div>
        <div className="flex justify-center">
            {/* Find an image of a phone mockup */}
            <Image 
              src="/phone-mockup.png" // Place this in the `public` folder
              alt="Blog on phone" 
              width={300} 
              height={500}
            />
        </div>
      </div>
    </section>
  );
};

export default Blogs;