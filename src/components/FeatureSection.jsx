import React from 'react';

const FeatureSection = () => {
  return (
    <section className="mt-20 container mx-auto px-6">
      <div className="bg-green-100 dark:bg-green-900/40 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-900 dark:text-green-200">Organically Grown Tech</h2>
        <p className="text-center mt-3 text-green-800 dark:text-green-300">We believe technology should feel natural. That's why we're committed to sustainable practices and user-centric design.</p>
        <div className="mt-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary p-3 rounded-full flex-shrink-0">
              <span className="material-icons-outlined text-gray-900">eco</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Sustainable Materials</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Our device shells are crafted from biodegradable, banana-fiber composites.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary p-3 rounded-full flex-shrink-0">
              <span className="material-icons-outlined text-gray-900">battery_charging_full</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">All-Day Potassium Power</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Proprietary battery technology that keeps you going from sunrise to sunset.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary p-3 rounded-full flex-shrink-0">
              <span className="material-icons-outlined text-gray-900">sync</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Seamless Ecosystem</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Our devices work together in perfect harmony, just like a bunch of bananas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
