import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-auto ">
      <p className="text-sm">
        Made with ❤️ by <span className="text-amber-500 font-semibold">Alok Kumar Yadav</span>
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/AlokKumarYadav2410"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://t.me/Subastral_alok"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          Telegram
        </a>
        <a
          href="https://www.linkedin.com/in/alokkumaryadav2410"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} NotesHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;