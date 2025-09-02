import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo .. */}
        <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </span>

        {/* desktop nav */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`${
                  active === link.id
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-indigo-500 dark:hover:text-indigo-300 transition text-xl
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile menu button */}
        <div>
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="rounded-lg shadow-md bg-background/95 backdrop-blur-md border border-gray-200 dark:border-gray-700"
        >
          <ul className="flex flex-col gap-2 py-4 px-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setActive(link.id);
                    setIsOpen(false); // Close menu on link click
                  }}
                  className={`block px-4 py-2 rounded-md ${
                    active === link.id
                      ? "text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:text-indigo-500 dark:hover:text-indigo-300 transition text-lg`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
