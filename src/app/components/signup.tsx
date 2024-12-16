import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="bg-gray-200 h-96 flex items-center w-full justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full sm:w-auto">
        <h1 className="text-2xl font-semibold text-[#2A254B] mb-4">
          Join the club and get the benefits
        </h1>
        <p className="text-[#2A254B] mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,<br />
          sales, pop-up stores, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-[#2A254B] bg-[#F9F9F9] p-3 rounded w-full sm:w-96 h-14 mb-4 sm:mb-0 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
          />
          <button className="bg-[#2A254B] text-white rounded w-full sm:w-72 h-14 hover:bg-[#1a1a32] focus:outline-none focus:ring-2 focus:ring-[#2A254B]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
