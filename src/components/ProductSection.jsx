import React from 'react';
import BanaPhonePro from '../assets/banaphone-pro.jpg';
import BanaWatch from '../assets/banawatch.jpg';

const ProductSection = () => {
  return (
    <section className="mt-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Meet the Bunch</h2>
      <p className="text-center mt-2 text-gray-600 dark:text-gray-400">Our latest harvest of innovation.</p>
      <div className="mt-10 space-y-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img alt="A hand holding a banana-shaped phone with a circuit board screen" className="w-full h-56 object-cover" src={BanaPhonePro} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">The BanaPhone Pro</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">With its revolutionary Peel-to-Unlock feature and a stunning circuit display, it's the smartest fruit in the bowl. Packed with a pico-projector for on-the-go presentations.</p>
            <a className="mt-4 inline-block text-primary font-semibold hover:underline" href="#">Learn More →</a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img alt="A person wearing a banana-shaped smartwatch on their wrist" className="w-full h-56 object-cover" src={BanaWatch} />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">The BanaWatch</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Time has never been more appealing. Track your fitness, get notifications, and make a statement with this ergonomic, high-tech wristwear.</p>
            <a className="mt-4 inline-block text-primary font-semibold hover:underline" href="#">Learn More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
