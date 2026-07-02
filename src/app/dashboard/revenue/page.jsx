import React from 'react';

const RevenuePage = () => {
    return (
       <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
      <h1 className="text-2xl font-bold mb-2">Revenue Reports</h1>
      <p className="text-base-content/60 mb-6">Track your platform subscriptions and payment entries.</p>
      
      <div className="stats shadow w-full bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title text-primary-content/70">Total Earnings</div>
          <div className="stat-value">$15,200</div>
          <div className="stat-desc text-primary-content/80">↗︎ 12% more than last month</div>
        </div>
      </div>
    </div>
    );
};

export default RevenuePage;