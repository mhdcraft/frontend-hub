import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  const navLinkClass =
    "block text-xs md:text-sm text-center rounded-tr-3xl rounded-br-3xl py-3 transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary text-neutral-white`
            : `${navLinkClass} text-black hover:bg-secondary-F5E8D5`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
