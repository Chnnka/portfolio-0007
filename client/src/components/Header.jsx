import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from '@material-tailwind/react';
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import commonImages from '../constants/commonImages';

// nav list menu
const navListMenuItems = [
  {
    title: 'Programming',
    description:
      'The Programming projects I have done using various tools & technologies',
    path: '/applications',
  },
  {
    title: 'UI/UX Projects',
    description: 'UI Designs, UX case studies I have done',
    path: '/ui-ux',
  },
  {
    title: 'Artworks',
    description: 'A complete set of Artworks',
    path: '/artworks',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, path }) => (
    <Link as={Link} to={path} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{' '}
              Showcase{' '}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{' '}
        Showcase{' '}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: 'About',
    icon: UserCircleIcon,
    link: '/about',
  },
  {
    label: 'Contacts',
    icon: CubeTransparentIcon,
    link: '/contact',
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Navbar className="fixed z-50 top-4 mx-auto max-w-screen-md p-2 lg:rounded-full lg:pl-6 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 px-2 py-2">
          <Typography
            as={Link}
            to="/"
            className="flex items-center mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <img
              src={commonImages.logo}
              className="mr-3 h-5"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              Channaka Gunawardhane
            </span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
