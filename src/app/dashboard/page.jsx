import React from 'react';

const DashboardPage = () => {

    const stats = [
    { id: 1, title: 'Total Blogs', value: '4', desc: '2 published this week', icon: '📝', color: 'text-primary' },
    { id: 2, title: 'Active Staff', value: '50+', desc: 'Expert educators', icon: '👨‍🏫', color: 'text-secondary' },
    { id: 3, title: 'Total Students', value: '1,200+', desc: 'Enrolled this semester', icon: '🎓', color: 'text-accent' },
    { id: 4, title: 'Success Rate', value: '98%', desc: 'Top performance', icon: '📈', color: 'text-success' },
  ];

    return (
       <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-neutral">School Dashboard Overview</h1>
        <p className="text-base-content/60 text-sm">Quick activities update.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body p-5 flex flex-row items-center justify-between">
              <div>
                <span className="text-sm text-base-content/60 font-medium block mb-1">{stat.title}</span>
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <div className="text-4xl bg-base-200 p-3 rounded-xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default DashboardPage;


