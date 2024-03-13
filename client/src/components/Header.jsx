import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownDivider,
} from 'flowbite-react';
import logo from './../assets/logo/Logo_Personal.png';

export default function Header() {

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <NavbarBrand as={Link} href="/">
        <Link to={'/'} className="flex">
          <img
            src={logo}
            className="mr-3 h-5 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Channaka Gunawardhane
          </span>
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Showcase" inline>
            <Dropdown.Item as={Link} to={'/artworks'}>Artworks</Dropdown.Item>
            <Dropdown.Item>UI/UX</Dropdown.Item>
            <Dropdown.Item>Applications</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>

        <Navbar.Link>
          <Link to={'/contact'}>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
