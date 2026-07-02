import React from 'react';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
const apiRoutes = [
    { id: 1, method: 'GET', endpoint: '/api/v1/blogs', desc: 'Fetch all public blog posts' },
    { id: 2, method: 'POST', endpoint: '/api/v1/blogs/create', desc: 'Publish a new school article' },
    { id: 3, method: 'GET', endpoint: '/api/v1/stats', desc: 'Retrieve student enrollment and success counters' },
  ];
const Developer = () => {
    return (
        <div className={roboto.className} >
         <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral">Developer Portal</h1>
        <p className="text-base-content/60 text-sm">Access application API configurations and developer integrations.</p>
      </div>

     
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body p-6">
          <h2 className="card-title text-base font-bold">Secret API Authorization Token</h2>
          <div className="flex gap-2 mt-2">
            <input 
              type="password" 
              readOnly 
              value="sk_live_2026_school_platform_secret_hash_value" 
              className="input input-bordered input-sm grow font-mono text-xs" 
            />
            <button className="btn btn-primary btn-sm">Reveal</button>
          </div>
        </div>
      </div>

  
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body p-6">
          <h2 className="card-title text-base font-bold mb-3">Core Endpoints Reference</h2>
          <div className="overflow-x-auto">
            <table className="table table-sm w-full">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {apiRoutes.map((route) => (
                  <tr key={route.id} className="hover">
                    <td>
                      <span className={`badge font-bold text-xs ${route.method === 'GET' ? 'badge-info text-white' : 'badge-success text-white'}`}>
                        {route.method}
                      </span>
                    </td>
                    <td className="font-mono text-xs text-secondary">{route.endpoint}</td>
                    <td className="text-xs text-base-content/70">{route.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> 
        </div>
    ); };
export default Developer;


