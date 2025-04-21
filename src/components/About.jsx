import React from 'react';
import reactImg from '../assets/image.png'; // Example image
import noteImg from '../assets/image1.png'; // Example image
import prod from '../assets/prod.png'; // Example image 
import code from '../assets/edit-code.png'; // Example image

const About = () => {
  const images = [reactImg, noteImg, prod, code, reactImg, noteImg];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-amber-500">About NotesHub</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          NotesHub is a simple and intuitive note-taking application designed to help you organize
          your thoughts and ideas. Whether you're jotting down quick notes or creating detailed
          plans, NotesHub makes it easy to stay productive.
        </p>

        {/* Features Section */}
        <h2 className="text-2xl font-semibold text-center mb-4 text-amber-500">Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Create and organize notes effortlessly.</li>
          <li>Search and filter notes quickly.</li>
          <li>Share notes with others.</li>
        </ul>

        {/* Images Section */}
        <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex gap-4 animate-scroll" style={{ animation: 'scroll 10s linear infinite' }}>
            {images.concat(images).map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image}
                  alt={`Note ${index + 1}`}
                  className="h-32 object-cover rounded-lg shadow-md"
                />
                {/* // w-48 */}
              </div>
            ))}
          </div>
        </div>

        {/* Creator Section */}
        <h2 className="text-2xl font-semibold text-center mt-8 mb-4 text-amber-500">About the Creator</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Hi, I'm <span className="text-amber-500 font-semibold hover:bg-amber-500 hover:text-amber-50 duration-500 ease-in-out cursor-pointer">Alok Kumar Yadav</span>, a passionate developer who loves
          building intuitive and user-friendly applications. Connect with me on{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </a>{' '}
          or{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ">
            GitHub
          </a>.
        </p>
      </div>
    </div>
  );
};

export default About;