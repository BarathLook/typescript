import React, { MouseEventHandler } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <Link to={to} onClick={handleClick}>
      {label}
    </Link>
  );
};

export default NavLink;
