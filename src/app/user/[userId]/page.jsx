import React from 'react';
import Link from 'next/link';
const userDetailsPage = async({params}) => {
    const {userId}=await params;
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user=await res.json();
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{user.website}</span>
    <div className="flex justify-between">
      <h4 className="text-2xl font-semibold">Address:</h4>
      
    </div>
    <ul className="mt-2 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Street: {user.address.street}
       
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
       City:{user.address.city}
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        zipcode:{user.address.zipcode}
      </li>
      
    </ul>
    <div className="mt-6">
    <Link href=
    "/user"> <button className="btn btn-primary btn-block">back</button></Link> 
    </div>
  </div>
</div>
    );
};

export default userDetailsPage;