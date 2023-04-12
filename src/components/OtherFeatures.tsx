import React from 'react';

const OtherFeatures = () => {
 return (
 <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="feature" className="m-auto object-fit object-center h-full w-1/2" src="./nature_0.jpeg" />
            </div>
        <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        </div>
        <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Feature 1</h2>
        <p className="leading-relaxed text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla.
        </p>
        </div>
        </div>
        <div className="sm:w-1/3 text-center sm:py-8">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        </div>
        <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Feature 2</h2>
        <p className="leading-relaxed text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla.
        </p>
        </div>
        </div>
        <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        </div>
        <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Feature 3</h2>
        <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla.
        </p>
        </div>
    </div>
    </div>
    </div>
    </div>
    </section>
 );
};


export default OtherFeatures;