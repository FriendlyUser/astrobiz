import React from 'react';

const Contact = () => {
 return (
 <section className="text-gray-600 body-font relative">
 <div className="container px-5 py-24 mx-auto">
 <div className="flex flex-col text-center w-full mb-20">
 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
 <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla.</p>
 </div>
 <form
 name="contact"
 method="POST"
 data-netlify="true"
 className="lg:w-1/2 md:w-2/3 mx-auto">
 <input type="hidden" name="form-name" value="contact" />
 <div className="flex flex-wrap -m-2">
 <div className="p-2 w-full">
 <div className="relative">
 <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
 <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
 </div>
 </div>
 <div className="p-2 w-full">
 <div className="relative">
 <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
 <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
 </div>
 </div>
 <div className="p-2 w-full">
 <div className="relative">
 <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
 <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
 </div>
 </div>
 <div className="p-2 w-full">
 <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
 </div>
 </div>
 </form>
 </div>
 </section>
 );
}

export default Contact;
