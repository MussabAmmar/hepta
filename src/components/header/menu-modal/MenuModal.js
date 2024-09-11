import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export const MenuModal = ({ handleMenuClick }) => {
  return (
    <nav className="fixed inset-0 z-20 flex justify-center bg-white">
      <FontAwesomeIcon
        onClick={handleMenuClick}
        className="absolute right-4 top-14 cursor-pointer text-black"
        icon={faX}
        size="2xl"
      />
      <menu className="relative flex flex-col items-center justify-center gap-4">
        {navigationLinks.map((navLink) => (
          <li key={navLink.name} className="px-2 py-1 font-abril text-4xl text-black hover:text-teal">
            <NavLink
              to={navLink.path}
              onClick={handleMenuClick}
              className={({ isActive }) => (isActive ? 'text-teal' : 'text-black')}
            >
              {navLink.name}
            </NavLink>
          </li>
        ))}
      </menu>
    </nav>
  );
};
