import React from 'react';
import Link from 'next/link';
const about = () => {
    return (
        <div className="min-h-screen bg-base-100 pb-16">
      
     
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 px-4 rounded-b-[2.5rem] shadow-lg text-center max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Platform Architecture
          </h1>
          <p className="text-lg text-blue-50 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Shaping minds, building futures, and fostering a community of lifelong learners through modern software engineering.
          </p>
        </div>
      </section>

     
      <section className="max-w-4xl mx-auto px-6 mt-16 space-y-12">
        
       
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral border-b-4 border-blue-500 pb-2 inline-block">
            Our Mission
          </h2>
          <p className="text-base text-base-content/80 leading-relaxed">
            Our goal is to make online education work for everyone. We strive to provide a nurturing 
            and innovative environment where students can unlock their full potential and prepare 
            for the challenges of tomorrow. This digital system acts as a bridge uniting administrators, 
            educators, parents, and students within a singular collaborative space.
          </p>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral border-b-4 border-blue-500 pb-2 inline-block">
            Platform Capabilities
          </h2>
          <p className="text-base text-base-content/80 leading-relaxed">
            This website functions as a secure management ecosystem built with Next.js and Tailwind CSS. 
            It features an interconnected array of public-facing content channels—such as our interactive educational 
            blogs—alongside a protected administrative portal. Through this system, school operators can audit user metrics, 
            oversee site developers, evaluate financial performance indicators, and manage student registration lifecycles.
          </p>
        </div>

       
        <div className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="card bg-base-200/60 border border-base-300 text-center py-6 px-4 rounded-xl">
              <div className="text-4xl font-black text-blue-600 mb-1">1,200+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-base-content/60">Active Students</div>
            </div>

            <div className="card bg-base-200/60 border border-base-300 text-center py-6 px-4 rounded-xl">
              <div className="text-4xl font-black text-blue-600 mb-1">50+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-base-content/60">Expert Teachers</div>
            </div>

            <div className="card bg-base-200/60 border border-base-300 text-center py-6 px-4 rounded-xl">
              <div className="text-4xl font-black text-blue-600 mb-1">98%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-base-content/60">Success Rate</div>
            </div>

          </div>
        </div>

      </section>

     
      <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="divider mb-8"></div>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="btn btn-primary px-6 shadow-sm">
            Open Dashboard Panel
          </Link>
          <Link href="/about/home" className="btn btn-outline px-6">
            Return Home
          </Link>
        </div>
      </section>

    </div>
    );
};

export default about;