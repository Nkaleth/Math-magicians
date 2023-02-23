import { Outlet, NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const NavBar = () => (
  <div>
    <div className="contNav">
      <h1>Math Magicians</h1>
      <ul className="linkBar">
        { links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    <hr />
    <Outlet />
  </div>
);

export default NavBar;
