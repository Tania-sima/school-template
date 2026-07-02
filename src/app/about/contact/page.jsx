import React from 'react';

 
export const metadata = {
  title: 'contact',
  description: '...',
}
 
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-12 px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-base-300">
          
          {/* Left Column: Contact Information */}
          <div className="p-8 sm:p-12 space-y-8 bg-base-50">
            <h2 className="text-2xl font-bold text-base-content mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mt-1">
                  <i className="fa-solid fa-location-dot text-xl w-6 text-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Campus</h4>
                  <p className="text-sm text-base-content/70 mt-1">
                    123 Education Avenue, Science Lab,<br />Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mt-1">
                  <i className="fa-solid fa-phone text-xl w-6 text-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-sm text-base-content/70 mt-1">
                    +880 1234-567890<br />
                    +880 9876-543210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mt-1">
                  <i className="fa-solid fa-envelope text-xl w-6 text-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>
                  <p className="text-sm text-blue-600 mt-1 hover:underline cursor-pointer">
                    info@schoolwebsite.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="pt-6 border-t border-base-300">
              <h4 className="font-semibold text-base-content mb-2">Office Hours</h4>
              <p className="text-sm text-base-content/70">Saturday - Thursday: 8:00 AM - 4:00 PM</p>
              <p className="text-sm text-base-content/50">Friday: Closed</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-base-content mb-6">
              Send a Message
            </h2>
            
            <form className="space-y-4">
              {/* Name Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="input input-bordered w-full focus:input-primary bg-base-200" 
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="input input-bordered w-full focus:input-primary bg-base-200" 
                  required
                />
              </div>

              {/* Message Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Your Message</span>
                </label>
                <textarea 
                  placeholder="Type your message here..." 
                  className="textarea textarea-bordered w-full h-32 focus:textarea-primary bg-base-200"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full text-white mt-4 bg-blue-600 hover:bg-blue-700 border-none">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;