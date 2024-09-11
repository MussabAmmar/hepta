import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { MenuModal } from './menu-modal/MenuModal';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute top-0 flex w-full justify-between bg-transparent px-4 py-14 text-white">
      <Link to="/" className="cursor-pointer font-abril text-3xl">
        Hepta
      </Link>
      {menuOpen ? (
        <MenuModal handleMenuClick={handleMenuClick} menuOpen={menuOpen} />
      ) : (
        <FontAwesomeIcon className="cursor-pointer" onClick={handleMenuClick} icon={faBars} size="2xl" />
      )}
    </header>
  );
};
