'use client' 
 import Link from 'next/link';
export default function Error({ unstable_retry }) {
  return (
    
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-md space-y-6 card bg-base-100 shadow-xl p-8 border border-base-300">
        
        
        <div className="space-y-2">
          <h1 className="text-9xl font-black text-blue-500 tracking-tight drop-shadow-sm">
            404
          </h1>
          <h2 className="text-2xl font-bold text-neutral">
            Page Not Found
          </h2>
        </div>

       
        <p className="text-base-content/70 text-sm leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable. Double-check the digital link or head back to safety.
        </p>

       
        <div className="divider opacity-40"></div>

      
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/about/home" className="btn btn-primary px-6 shadow-sm">
            🏠 Return Home
          </Link>
          <button className="btn btn-error px-6 shadow-sm" onClick={() => unstable_retry() }>Try again</button>
        </div>

      </div>
    </div>
  )
}