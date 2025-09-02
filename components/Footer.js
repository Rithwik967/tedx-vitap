import React from 'react';

// ...existing code...
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            <span className="text-white">TEDx</span><span className="text-red-500">VITAP</span>
          </h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="YouTube" className="text-white hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" role="img">
                <title>YouTube</title>
                <path d="M23.498 6.186a2.996 2.996 0 00-2.11-2.118C19.516 3.5 12 3.5 12 3.5s-7.516 0-9.389.568A2.995 2.995 0 00.5 6.186 31.22 31.22 0 000 12a31.22 31.22 0 00.5 5.814 2.995 2.995 0 002.111 2.118C4.484 20.5 12 20.5 12 20.5s7.516 0 9.389-.568a2.996 2.996 0 002.11-2.118A31.22 31.22 0 0024 12a31.22 31.22 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" role="img">
                <title>LinkedIn</title>
                <path d="M4.98 3.5C3.88 3.5 3 4.37 3 5.5s.88 2 1.98 2H5c1.1 0 2-.88 2-2S6.1 3.5 5 3.5h-.02zM3.5 8.98H7V21H3.5V8.98zM9.5 8.98h3.3v1.62h.05c.46-.87 1.58-1.78 3.25-1.78 3.48 0 4.12 2.29 4.12 5.27V21h-3.5v-5.15c0-1.23-.02-2.81-1.71-2.81-1.72 0-1.98 1.35-1.98 2.74V21h-3.48V8.98z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" role="img">
                <title>Facebook</title>
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.13 10.44 21.95v-6.95H8.08v-2.93h2.36V9.41c0-2.33 1.38-3.61 3.49-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.93h-2.1V21.95C18.34 21.13 22 17.06 22 12.07z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Events</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Team</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">Community</h4>
           <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
         <div>
          <h4 className="font-bold text-white mb-3">Legal</h4>
           <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-800 pt-6">
        <p>&copy; {new Date().getFullYear()} TEDx VITAP. This is an independent TEDx event.</p>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing