import { useState } from "react";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-[1400px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-brand-gradient flex items-center justify-center text-black font-bold text-sm">
            &lt;/&gt;
          </span>
          <span className="text-white font-bold text-lg">Dev Stack</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-textSecondary text-sm hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-textSecondary text-sm font-medium hover:text-white px-4 py-2">
            Sign In
          </button>
          <button className="bg-brand-gradient text-black text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-white text-2xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 px-5 pb-5 pt-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2.5 px-2 text-textSecondary text-sm hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-3 pt-4 border-t border-neutral-800">
            <button className="flex-1 border border-neutral-700 text-textSecondary text-sm font-medium py-2 rounded-full">
              Sign In
            </button>
            <button className="flex-1 bg-brand-gradient text-black text-sm font-semibold py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
