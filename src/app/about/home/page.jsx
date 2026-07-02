import React from 'react';

const home = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden">
        
       
        <div className="bg-blue-600 text-white py-12 px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">About Our School</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Shaping minds, building futures, and fostering a community of lifelong learners. 
          </p>
        </div>

     
        <div className="p-8 sm:p-12 space-y-8">
          
        
          <div>
            <h2 className="text-2xl font-bold text-base-content mb-3 border-b-2 border-blue-500 w-fit pb-1">
              Our Mission
            </h2>
            <p className="text-base-content/80 leading-relaxed">
              Our goal is to make online education work for everyone. We strive to provide a nurturing and innovative environment where students can unlock their full potential and prepare for the challenges of tomorrow.
            </p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-base-200 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600">1,200+</div>
              <div className="text-sm font-medium text-base-content/70 mt-1">Active Students</div>
            </div>
            <div className="bg-base-200 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600">50+</div>
              <div className="text-sm font-medium text-base-content/70 mt-1">Expert Teachers</div>
            </div>
            <div className="bg-base-200 p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600">98%</div>
              <div className="text-sm font-medium text-base-content/70 mt-1">Success Rate</div>
            </div>
          </div>

        
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-base-content mb-4 border-b-2 border-blue-500 w-fit pb-1">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Excellence</h4>
                  <p className="text-sm text-base-content/70">We push for the highest standards in education and behavior.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg font-bold">✓</div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-base-content/70">Embracing new technologies to make learning exciting and effective.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
};

export default home;