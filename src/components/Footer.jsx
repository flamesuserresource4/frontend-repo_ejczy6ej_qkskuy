import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-amber-900/40 bg-[#0b0705] py-10 text-amber-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Enchanted Library. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#collections" className="hover:text-amber-400">Collections</a>
            <a href="#characters" className="hover:text-amber-400">Characters</a>
            <a href="#top" className="hover:text-amber-400">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
