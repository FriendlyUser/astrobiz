import React from 'react';

const Hero = () => {
 return (
 <section className="bg-gray-100">
 <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
 <img className="object-cover object-center rounded" alt="hero" src="./nature_3.jpeg" />
 </div>
 <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
 Company Name is amazing
 </h1>
 <p className="mb-8 leading-relaxed">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla. Integer vitae congue dolor. Aenean auctor vitae mauris sit amet commodo. Phasellus viverra lectus vitae ultrices vulputate.
 </p>
 </div>
 </div>
 </section>
 );
};

export default Hero;