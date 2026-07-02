import React from 'react';
import Link from 'next/link';
const DashboardLayout = ({children}) => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col md:flex-row">
      
   
      <aside className="w-full md:w-64 bg-base-100 shadow-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-2xl">🏫</span>
            <span className="font-bold text-xl tracking-tight text-neutral">Admin Panel</span>
          </div>        
          <ul className="menu bg-base-100 w-full rounded-box p-0 gap-1">
            <li><Link href="/dashboard">📊 Overview</Link></li>
            <li><Link href="/dashboard/profile">👤 Profile</Link></li>
            <li><Link href="/dashboard/revenue">💰 Revenue</Link></li>
            <div className="divider my-2"></div>
            <li><Link href="/about/home">🏠 Back to Home</Link></li>
          </ul></div></aside>

      
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        {children} 
      </main>
      
    </div>
    );
};

export default DashboardLayout;

