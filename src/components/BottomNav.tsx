import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] glass-nav rounded-full px-8 py-3.5 md:min-w-[320px] max-w-[480px] sm:bottom-6 max-sm:bottom-4 max-sm:w-[calc(100%-48px)] max-sm:px-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex items-center justify-center gap-10 max-sm:gap-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
