import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-700">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Info Section (simplified) */}
          <div>
            <div className="bg-white p-6 rounded-lg ring-1 ring-gray-100">
              <h2 className="text-lg font-medium text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mt-2">
                Have a question or want to work together? Send us a message and
                we’ll respond as soon as possible.
              </p>

              <div className="mt-4 space-y-2 text-gray-700">
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  support@example.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> +91 98765 43210
                </p>
                <p className="text-sm">
                  <span className="font-medium">Address:</span> New Delhi, India
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-md text-sm"
                >
                  Message
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-md text-sm"
                >
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Section (clean fields) */}
          <form className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-700">Your Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-700">Your Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-gray-700">Subject</span>
              <input
                type="text"
                placeholder="Subject"
                className="mt-1 block w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Message</span>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="mt-1 block w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
              ></textarea>
            </label>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-emerald-700 text-white px-5 py-2 rounded-md text-sm hover:bg-emerald-800 transition-shadow shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
