import React from 'react';
import Link from 'next/link';
const UserPage = async() => {
    
const res=await fetch("https://jsonplaceholder.typicode.com/users");
const users=await res.json();

    return (
         <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral">User Management</h1>
        <p className="text-base-content/60 text-sm">Click "View Profile" to access dynamic user files.</p>
      </div>
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body p-6">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>E-MAIL</th>
                  <th>ADDRESS</th>
                  <th>Profile Link</th>
                </tr>
              </thead>
              <tbody>
        
  {users.map(user=>
 <tr key={user.id} className="hover">
                    <td className="font-mono text-xs">{user.name}</td>
                    <td className="badge badge-outline badge-primary">{user.email}</td>
                    <td>{user.address.city}</td>
                   
                   <td >
                      <Link href={`/user/${user.id}`} className="btn btn-primary btn-xs">
                        View Profile →</Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div></div>
      </div>
    </div>
    );};
export default UserPage;



  