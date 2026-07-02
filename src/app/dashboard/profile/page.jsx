import React from 'react';

const ProfilePage = () => {
    return (
        <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Profile Settings</h1>
      <p className="text-base-content/60 mb-6">Manage your account information and preferences.</p>
      
      <div className="form-control w-full max-w-xs gap-4">
        <label className="input input-bordered flex items-center gap-2">
          Name: <input type="text" className="grow" defaultValue="Admin User" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email: <input type="text" className="grow" defaultValue="admin@school.edu" />
        </label>
        <button className="btn btn-primary w-fit mt-2">Update Profile</button>
      </div>
    </div>
    );
};

export default ProfilePage;