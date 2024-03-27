import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggle, Dropdown } from 'flowbite-react';
import commonImages from '../constants/commonImages';

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 shadow-sm backdrop-filter backdrop-blur-md bg-opacity-50"
    >
      <NavbarBrand as={Link} to="/">
        <img
          src={commonImages.logo}
          className="mr-3 h-5 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Channaka Gunawardhane
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown label="Showcase" inline>
            <Dropdown.Item as={Link} to={'/artworks'}>
              Artworks
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={'/ui-ux'}>
              UI/UX
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={'/applications'}>
              Applications
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as={Link} to={'/contact'}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
