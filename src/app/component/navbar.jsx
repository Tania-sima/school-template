'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    const list=<>
      
           <li><Link className={pathname === '/blogs' ? 'text-red-600' : ''} href="/blogs">Blogs</Link></li>
            <li><Link className={pathname === '/dashboard' ? 'text-red-600' : ''} href="/dashboard" >Dashboard</Link></li>
            <li><Link className={pathname === '/about/developer' ? 'text-red-600' : ''} href="/about/developer" >Developers</Link></li>
            <li><Link className={pathname === '/user' ? 'text-red-600' : ''} href="/user" >Users</Link></li>
            </>

    return (
           <div className="navbar bg-blue-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link className={pathname === '/about/home' ? 'text-red-600' : ''} href="/about/home">Home</Link></li>
        <li>
          <a>About</a>
          <ul className="p-2">
           {list}
          </ul>
        </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><i className="fa-solid fa-school"></i></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className={pathname === '/about/home' ? 'text-red-600' : ''} href="/about/home">Home</Link></li>
      <li>
        <details>
          <summary>About</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
           {list}
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/blogs" className="btn bg-blue-800 text-white">Explore</Link>
  </div>
</div>
       
    );
};

export default Navbar;